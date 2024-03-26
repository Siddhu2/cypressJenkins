pipeline {
    agent any
    stages {
        stage('Execution') {
            steps { 
                sh'
                npm i
                npx cypress run
                '
            }
        }
    }
}