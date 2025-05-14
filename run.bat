@echo off
echo 🚀 Building and running Do Hoang Vu's Portfolio in Docker

REM Check if the container already exists and remove it if it does
FOR /F "tokens=*" %%i IN ('docker ps -aq -f "name=portfolio-container"') DO (
    IF NOT "%%i"=="" (
        echo 🧹 Removing existing container...
        docker stop portfolio-container 2>NUL
        docker rm portfolio-container 2>NUL
    )
)

REM Build the Docker image
echo 📦 Building Docker image...
docker build -t portfolio:latest .

REM Check for existing images and prune old ones
echo 🧹 Pruning old images...
docker image prune -f

REM Run the container
echo 🔄 Running Docker container...
docker run -p 8000:8000 -d --restart unless-stopped --name portfolio-container portfolio:latest

REM Check if container is running
FOR /F "tokens=*" %%i IN ('docker ps -q -f "name=portfolio-container"') DO (
    IF NOT "%%i"=="" (
        echo ✅ Portfolio is now running on http://localhost:8000
        echo 📋 Container logs: docker logs portfolio-container
        echo 🛑 To stop: docker stop portfolio-container
        echo 🔁 To restart: docker restart portfolio-container
        echo 🗑️ To remove: docker rm -f portfolio-container
        goto :end
    )
)

echo ❌ Failed to start the container. Check the logs with: docker logs portfolio-container
exit /b 1

:end 