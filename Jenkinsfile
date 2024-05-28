pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'majeedga/majeed-develops'
        REGISTRY_CREDENTIALS = 'dockerhub-credentials-id'
        AZURE_CREDENTIALS = 'azure-credentials-id'
        ACR_NAME = 'portfolioRegistry'
        RESOURCE_GROUP = 'portfolio-site-rg'
        APP_SERVICE = 'portfolioWebApp'
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
                    withCredentials([usernamePassword(credentialsId: env.REGISTRY_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        bat '''
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        docker build -t %DOCKER_IMAGE%:latest .
                        docker tag %DOCKER_IMAGE%:latest %ACR_NAME%.azurecr.io/%DOCKER_IMAGE%:latest
                        '''
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:latest").inside {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:latest").inside {
                        bat 'sonar-scanner'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: env.REGISTRY_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        bat '''
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        docker push %ACR_NAME%.azurecr.io/%DOCKER_IMAGE%:latest
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([azureServicePrincipal('AZURE_CREDENTIALS')]) {
                        bat '''
                        az login --service-principal -u %AZURE_CLIENT_ID% -p %AZURE_CLIENT_SECRET% --tenant %AZURE_TENANT_ID%
                        az acr login --name %ACR_NAME%
                        az webapp config container set --name %APP_SERVICE% --resource-group %RESOURCE_GROUP% --docker-custom-image-name %ACR_NAME%.azurecr.io/%DOCKER_IMAGE%:latest
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        // success {
        //     emailext (
        //         subject: "Jenkins Pipeline: Successful",
        //         body: "The Jenkins Pipeline completed successfully.",
        //         to: "abdulmajeedgaroot@gmail.com"
        //     )
        // }
        // failure {
        //     emailext (
        //         subject: "Jenkins Pipeline: Failed",
        //         body: "The Jenkins Pipeline failed.",
        //         to: "abdulmajeedgaroot@gmail.com"
        //     )
        // }
    }
}
