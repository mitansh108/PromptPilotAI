pipeline {
    agent any
    
    tools {
        nodejs 'Node20' // This matches the name in Global Tool Configuration
    }
    
    environment {
        // Use the global credentials you created
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = credentials('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY')
        CLERK_SECRET_KEY = credentials('CLERK_SECRET_KEY')
        NEXT_PUBLIC_CLERK_SIGN_IN_URL = credentials('NEXT_PUBLIC_CLERK_SIGN_IN_URL')
        NEXT_PUBLIC_CLERK_SIGN_UP_URL = credentials('NEXT_PUBLIC_CLERK_SIGN_UP_URL')
        NEXT_PUBLIC_GEMINI_API_KEY = credentials('NEXT_PUBLIC_GEMINI_API_KEY')
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }
        
        stage('Build') {
            steps {
                // Create cache directory if it doesn't exist
                sh 'mkdir -p .next/cache'
                sh 'npm run build'
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Skipping lint for now - ESLint not configured'
                // sh 'npm run lint'
            }
        }
        
        stage('Show Keys') {
            steps {
                echo 'Environment Variables:'
                sh 'echo "CLERK_PUBLISHABLE: $NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"'
                sh 'echo "CLERK_SECRET: $CLERK_SECRET_KEY"'
                sh 'echo "GEMINI_API: $NEXT_PUBLIC_GEMINI_API_KEY"'
                sh 'echo "VERCEL_TOKEN: $VERCEL_TOKEN"'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Skipping deploy for now - recovering keys first'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}