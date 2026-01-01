node {
    def appDir = '/var/www/nextjs-app'

    stage('Clean Workspace'){
        echo "Cleaning Workspace...."
        deleteDir()
    }

    stage('Clone Repo'){
        echo 'Cloning the repo'
        git(
            branch :'main',
            url: 'https://github.com/Omkar9689/NextJS-Hosting-on-EC2.git'
        )
    }

    stage('Deploy to EC2'){
        echo "Deploying to EC2"
        sh """ 
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}
        
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}
        
            cd ${appDir}
            npm install
            sudo npm run build
            sudo fuser -k 3000/tcp || true
            npm run start
        """
    }
}