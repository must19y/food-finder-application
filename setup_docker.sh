#!/bin/sh
# Assumes docker-compose.yaml is at the root of /workspace
cd /workspace/foodfinder
# Start the Docker daemon
dockerd &
# Wait for the Docker daemon to be ready
sleep 5
# Start the Docker Compose services
docker-compose up -d
