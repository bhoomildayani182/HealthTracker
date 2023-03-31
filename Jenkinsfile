#!/usr/bin/env groovy

pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3'
    }

    parameters {
        choice(name: 'VERSION', choices:['1'], description: '')
        booleanParam(name: 'executeTest', defaultValue : true, description: '')
    }
    
      stage('deploy') {
        
            steps {
                script{echo 'deploying the application'
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    // sh "docker commit HelthTracker ${USERNAME}/helthtracker"
                    // sh "docker kill HelthTracker"
                    // sh "docker container rm HelthTracker"
                    // sh "docker build -t ${USERNAME}/helthtracker  ."
                    // sh "echo ${PASSWORD} | docker login -u ${USERNAME} --password-stdin"
                    // sh "docker push ${USERNAME}/helthtracker"
                    // sh "docker run -d --name HelthTracker -p 3000:3000 -p 3001:3001 ${USERNAME}/helthtracker"
                    // sh "docker image prune -a -f"
                }}
                
             }
        }

    post{
        always{
            echo 'Executing always...'
        }
        success{
            echo 'Executing success'
        }
        failure{
            echo 'Executing failure'
        }
    }
}
