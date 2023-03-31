
pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3'
    }

    parameters {
        choice(name: 'VERSION', choices:['1','2', '3'], description: '')
        booleanParam(name: 'executeTest', defaultValue : true, description: '')
    }
    
    // tools{
    //     maven 'maven-3.9.0'
    // }

    stages {
        stage('init'){
            steps{
                script{
                    gv = load "script.groovy"
                }
            }
        }
        stage('config'){
            steps{
                script{
                    gv.config()
                }
            }
        }
        stage('build') {
            
            steps {
                script{
                    echo 'building the application'
                    // echo "Software version is ${NEW_VERSION}"
                    // sh 'mvn build-helper:parse-version versions:set -DnewVersion=\\\${parsedVersion.majorVersion}.\\\${parsedVersion.nextMinorVersion}.\\\${parsedVersion.incrementalVersion}\\\${parsedVersion.qualifier?}' 
                    // sh 'mvn clean package'
                    // def version = (readFile('pom.xml') =~ '<version>(.+)</version>')[0][2]
                    // env.IMAGE_NAME = "$version-$BUILD_NUMBER"
                    // sh "docker build -t bhoomildayani182/spring-boot:${IMAGE_NAME} ."
                        
                    }
            }
        }
      stage('test') {
          when{  
             expression{
                 params.executeTest
             }
          }
            steps {
                script{echo 'testing the application'
                sh 'mvn test'}
            }
        }
      stage('deploy') {
        // input{
        //     message "Select the environment to deploy"
        //     ok "done"
        //     parameters{
        //         choice(name: 'Type', choices:['Dev','Test','Deploy'], description: '')
        //     }

        // }
            steps {
                script{echo 'deploying the application'
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                    sh "docker commit HelthTracker ${USERNAME}/helthtracker"
                    sh "docker kill HelthTracker"
                    sh "docker container rm HelthTracker"
                    sh "docker build -t ${USERNAME}/helthtracker  ."
                    sh "echo ${PASSWORD} | docker login -u ${USERNAME} --password-stdin"
                    sh "docker push ${USERNAME}/helthtracker"
                    sh "docker run -d --name HelthTracker -p 3000:3000 -p 3001:3001 ${USERNAME}/helthtracker"
                    sh "docker image prune -a -f"
                }}
                
             }
        }

        // stage('commit version update'){
        //     steps{
        //         script{
        //             withCredentials([usernamePassword(credentialsId: 'git-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
        //                 sh 'git config --global user.email "bhoomildayani182@gmail.com"'
        //                 sh 'git config --global user.name "bhoomildayani182"'


        //                 sh 'git status'
        //                 sh 'git branch'
        //                 sh 'git config --list'


        //                 sh "git remote set-url origin https://${PASSWORD}@github.com/bhoomildayani182/devOpsLab.git"
        //                 sh 'git add .'
        //                 sh 'git commit -m "version change"'
        //                 // sh 'git push -u origin master'
        //                 sh 'git push origin HEAD:jenkins-jobs'
        //             }
        //         }
        //     }
        // }
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
