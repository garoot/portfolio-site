pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'majeedga/majeed-develops'
        REGISTRY_CREDENTIALS = 'dockerhub-credentials-id'
        AZURE_CREDENTIALS = 'azure-credentials-id'
        ACR_NAME = 'portfolioRegistry'
        RESOURCE_GROUP = 'portfolio-site-rg'
        APP_SERVICE = 'portfolioWebApp'
        CODECLIMATE_API_TOKEN = credentials('codeclimate-api-token')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/garoot/portfolio-site.git'
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
                    withCredentials([string(credentialsId: 'codeclimate-api-token', variable: 'CODECLIMATE_REPO_TOKEN')]) {
                        bat """
                        docker run --rm -e CODECLIMATE_REPO_TOKEN=${CODECLIMATE_REPO_TOKEN} -v %cd%:/code -v //var/run/docker.sock:/var/run/docker.sock codeclimate/codeclimate analyze
                        """
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-credentials-id', variable: 'DOCKER_PASSWORD')]) {
                        bat """
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        docker tag ${DOCKER_IMAGE}:latest ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest
                        docker push ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([azureServicePrincipal(credentialsId: 'azure-credentials-id')]) {
                        bat """
                        az login --service-principal -u ${AZURE_CLIENT_ID} -p ${AZURE_CLIENT_SECRET} --tenant ${AZURE_TENANT_ID}
                        az acr login --name ${ACR_NAME}
                        az webapp config container set --name ${APP_SERVICE} --resource-group ${RESOURCE_GROUP} --docker-custom-image-name ${ACR_NAME}.azurecr.io/${DOCKER_IMAGE}:latest
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
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
