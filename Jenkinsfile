pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'majeedga/majeed-develops'
        AZURE_CREDENTIALS = 'azure-sp-credentials-id'
        ACR_NAME = 'majeedportfolioregistry'
        RESOURCE_GROUP = 'portfolio-site-rg'
        CONTAINER_INSTANCE_NAME = 'node-app'
        LOCATION = 'eastus'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/garoot/portfolio-site.git'
            }
        }

        stage('Install Docker (if needed)') {
            steps {
                script {
                    if (!fileExists('C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe')) {
                        echo 'Docker is not installed. Installing Docker...'
                        bat '''
                        powershell -Command "Invoke-WebRequest -Uri https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe -OutFile DockerDesktopInstaller.exe"
                        start /wait DockerDesktopInstaller.exe install
                        '''
                    } else {
                        echo 'Docker is already installed.'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    bat "docker run --rm ${DOCKER_IMAGE}:latest npm test"
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    bat "docker run --rm ${DOCKER_IMAGE}:latest npx eslint . --ext .js,.jsx,.ts,.tsx"
                }
            }
        }

        stage('Push Docker Image to ACR') {
            steps {
                script {
                    withCredentials([azureServicePrincipal(credentialsId: AZURE_CREDENTIALS)]) {
                        def subscriptionId = env.AZURE_SUBSCRIPTION_ID
                        def clientId = env.AZURE_CLIENT_ID
                        def clientSecret = env.AZURE_CLIENT_SECRET
                        def tenantId = env.AZURE_TENANT_ID
                        bat """
                        set AZURE_SUBSCRIPTION_ID=${subscriptionId}
                        set AZURE_CLIENT_ID=${clientId}
                        set AZURE_CLIENT_SECRET=${clientSecret}
                        set AZURE_TENANT_ID=${tenantId}
                        az login --service-principal -u %AZURE_CLIENT_ID% -p %AZURE_CLIENT_SECRET% --tenant %AZURE_TENANT_ID%
                        az acr login --name ${ACR_NAME}
                        docker tag ${DOCKER_IMAGE}:latest ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest
                        docker push ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest
                        """
                    }
                }
            }
        }

        stage('Deploy to ACI') {
            steps {
                script {
                    withCredentials([azureServicePrincipal(credentialsId: AZURE_CREDENTIALS)]) {
                        def subscriptionId = env.AZURE_SUBSCRIPTION_ID
                        def clientId = env.AZURE_CLIENT_ID
                        def clientSecret = env.AZURE_CLIENT_SECRET
                        def tenantId = env.AZURE_TENANT_ID
                        bat """
                        set AZURE_SUBSCRIPTION_ID=${subscriptionId}
                        set AZURE_CLIENT_ID=${clientId}
                        set AZURE_CLIENT_SECRET=${clientSecret}
                        set AZURE_TENANT_ID=${tenantId}
                        az login --service-principal -u %AZURE_CLIENT_ID% -p %AZURE_CLIENT_SECRET% --tenant %AZURE_TENANT_ID%
                        az container delete --name ${CONTAINER_INSTANCE_NAME} --resource-group ${RESOURCE_GROUP} --yes
                        az container create --name ${CONTAINER_INSTANCE_NAME} --resource-group ${RESOURCE_GROUP} --image ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest --cpu 1 --memory 1.5 --ports 8080 --dns-name-label mynodeappeastus --location ${LOCATION} --ip-address Public --environment-variables PORT=8080
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs(
                deleteDirs: true,
                notFailBuild: true,
                disableDeferredWipeout: true
            )
        }
        success {
            emailext (
                subject: "Jenkins Pipeline: Successful",
                body: "The Jenkins Pipeline completed successfully.",
                to: "abdulmajeedgaroot@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "Jenkins Pipeline: Failed",
                body: "The Jenkins Pipeline failed.",
                to: "abdulmajeedgaroot@gmail.com"
            )
        }
    }
}
