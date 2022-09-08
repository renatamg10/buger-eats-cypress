pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue:"cypress/integration/**/**", description: "Script path")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "browser")
    }
    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo 'Building'
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser=${BROWSER} --spec ${SPEC}"
            }

            
        }
        stage('Deployng'){
            echo 'Deploying'
        }
    }
    post{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'buger-eats/mochawesome-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    }
}