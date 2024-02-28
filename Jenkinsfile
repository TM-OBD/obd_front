pipeline {
    agent any

    environment {
        NEXUS_URL = "https://nexus-url"
        NEXUS_CREDENTIALS_ID = "cred-id"
        DOCKER_COMPOSE_FILE = "path-to-docker-compose-file"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    buildAndPush('service-directory', 'latest')
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            script {
                // Logout from Nexus
                sh "docker logout ${NEXUS_URL}"
            }
        }

        success {
            echo 'Pipeline succeeded!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}

def buildAndPush(directory, newImageTag) {
    dir(directory) {
        def imageName = "${NEXUS_URL}/${directory}:${newImageTag}"

        echo "Building Docker image for ${directory}..."
        sh "docker build -t ${imageName} ."

        echo "Logging in to Nexus registry..."
        withCredentials([usernamePassword(credentialsId: "${NEXUS_CREDENTIALS_ID}", usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD')]) {
            sh "docker login -u ${NEXUS_USERNAME} -p ${NEXUS_PASSWORD} ${NEXUS_URL}"
        }

        echo "Pushing to the Nexus Docker registry with tag: ${newImageTag}..."
        sh "docker push ${imageName}"

        return newImageTag
    }
}
