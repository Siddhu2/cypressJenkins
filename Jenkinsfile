pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npx cypress run' 
            }
        }
    }
}