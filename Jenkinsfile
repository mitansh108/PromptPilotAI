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
        
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t prompt-pilot:latest .'
                sh 'docker build -t prompt-pilot:${BUILD_NUMBER} .'
                echo 'Docker image built successfully!'
            }
        }
        
        stage('Docker Test') {
            steps {
                echo 'Testing Docker container...'
                sh '''
                    # Run container in background
                    docker run -d --name prompt-pilot-test-${BUILD_NUMBER} -p 3001:3000 prompt-pilot:${BUILD_NUMBER}
                    
                    # Wait for container to start
                    sleep 10
                    
                    # Test if container is responding
                    curl -f http://localhost:3001 || exit 1
                    
                    # Stop and remove test container
                    docker stop prompt-pilot-test-${BUILD_NUMBER}
                    docker rm prompt-pilot-test-${BUILD_NUMBER}
                '''
                echo 'Docker container test passed!'
            }
        }
        
        stage('Lint') {
            steps {
                echo 'Skipping lint for now - ESLint not configured'
                // sh 'npm run lint'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying to Vercel...'
                sh 'npx vercel --token $VERCEL_TOKEN --prod --yes'
                echo 'Deployment completed!'
            }
        }
    }
    
    post {
        always {
            // Clean up Docker containers and images
            sh '''
                # Remove test containers if they exist
                docker rm -f prompt-pilot-test-${BUILD_NUMBER} || true
                
                # Keep only the latest 5 images to save space
                docker images prompt-pilot --format "table {{.Tag}}" | tail -n +2 | sort -nr | tail -n +6 | xargs -r docker rmi prompt-pilot: || true
            '''
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
            echo "Docker image prompt-pilot:${BUILD_NUMBER} is ready!"
        }
        failure {
            echo 'Pipeline failed!'
            // Clean up on failure
            sh 'docker rm -f prompt-pilot-test-${BUILD_NUMBER} || true'
        }
    }
}