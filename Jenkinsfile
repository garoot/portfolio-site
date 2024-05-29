pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'majeedga/majeed-develops'
        ACR_NAME = 'majeedacr'
        RESOURCE_GROUP = 'portfolio-site-rg'
        APP_SERVICE_NAME = 'majeedappservice'
        STAGING_SLOT = 'staging'
        AZURE_CREDENTIALS = 'azure-service-principal'
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

        stage('Push Docker Image to Azure Container Registry') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: AZURE_CREDENTIALS, usernameVariable: 'AZURE_CLIENT_ID', passwordVariable: 'AZURE_CLIENT_SECRET')]) {
                        bat "az login --service-principal -u %AZURE_CLIENT_ID% -p %AZURE_CLIENT_SECRET% --tenant %AZURE_TENANT_ID%"
                        bat "az acr login --name ${ACR_NAME}"
                        bat "docker tag ${DOCKER_IMAGE}:latest ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest"
                        bat "docker push ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy to Staging Slot') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: AZURE_CREDENTIALS, usernameVariable: 'AZURE_CLIENT_ID', passwordVariable: 'AZURE_CLIENT_SECRET')]) {
                        // Create the staging slot if it doesn't exist
                        bat """
                        az webapp deployment slot create --name ${APP_SERVICE_NAME} --resource-group ${RESOURCE_GROUP} --slot ${STAGING_SLOT} || echo "Staging slot already exists."
                        """
                        // Deploy to the staging slot
                        bat """
                        az webapp config container set --name ${APP_SERVICE_NAME} --resource-group ${RESOURCE_GROUP} --slot ${STAGING_SLOT} --container-image-name ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest --container-registry-url https://${ACR_NAME}.azurecr.io
                        """
                    }
                }
            }
        }

        stage('Release to Production') {
            steps {
                script {
                    // Manual approval for deployment to production
                    input message: 'Deploy to Production?', ok: 'Deploy'
                    withCredentials([usernamePassword(credentialsId: AZURE_CREDENTIALS, usernameVariable: 'AZURE_CLIENT_ID', passwordVariable: 'AZURE_CLIENT_SECRET')]) {
                        // Swap the staging slot with production
                        bat "az webapp deployment slot swap --name ${APP_SERVICE_NAME} --resource-group ${RESOURCE_GROUP} --slot ${STAGING_SLOT} --target-slot production"
                    }
                }
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: AZURE_CREDENTIALS, usernameVariable: 'AZURE_CLIENT_ID', passwordVariable: 'AZURE_CLIENT_SECRET')]) {
                        // Example of setting up monitoring and alerting using Azure Monitor
                        bat "az monitor metrics alert create --name 'HighCPUUsage' --resource-group ${RESOURCE_GROUP} --scopes /subscriptions/%AZURE_SUBSCRIPTION_ID%/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Web/sites/${APP_SERVICE_NAME} --condition 'avg Percentage CPU > 80' --window-size 5m --evaluation-frequency 1m --action /subscriptions/%AZURE_SUBSCRIPTION_ID%/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Insights/actionGroups/your-action-group"
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
