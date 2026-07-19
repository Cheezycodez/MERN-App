# Secure DevOps MERN Application

## Overview
This project focuses on infrastructures as an extension of a base MERN (MongoDB, Express, React, Node.js) application originally developed by [doananhtingithub40102](https://github.com/doananhtingithub40102/mern-app). It was extended to implement a microservices architecture using containerisation and orchestration. The objective was to decouple the application components, establish secure internal networking, and create a scalable deployment environment using Docker and Kubernetes.

## Project Scope:
Please note that the focus of this project is the secure DevOps infrastructure, containerisation, and orchestration. The MERN application code is utilised only to demonstrate deployment frameworks and internal networking principles. So not all frontend application features are fully functional.

## Tech Stack and Tools
* **Core Application:** MongoDB, Express.js, React, Node.js
* **Containerisation:** Docker, Docker Compose
* **Orchestration:** Kubernetes (Deployments, StatefulSets)
* **Networking & Security:** Nginx (Reverse Proxy, SSL/HTTPS), Kubernetes Secrets

## Key Architectural Enhancements
* **Microservices and Containerisation:** Packaged the frontend, backend, database, and Mongo Express interface into isolated Docker containers to ensure consistent and reproducible environments.
* **Kubernetes Orchestration:** Implemented a complete orchestration strategy, utilising a StatefulSet to ensure database resilience, and NodePort Services to expose the frontend and backend deployments.
* **Reverse Proxy and SSL Integration:** Configured an Nginx reverse proxy to handle external routing, redirect HTTP traffic to HTTPS, and securely route requests to the appropriate internal containers.
* **Secure Credential Management:** Enforced environment security by managing database credentials through Kubernetes Secrets and environment variable injection, excluding sensitive data from version control.

## Original Attribution
The foundational MERN project was originally created by [doananhtingithub40102] and can be found here: [[https://github.com/doananhtingithub40102/mern-app](https://github.com/doananhtingithub40102/mern-app)]. All Docker configurations, Kubernetes manifests, Nginx reverse proxy setups, and network architecture were developed independently as part of this project.

## Local Setup & Installation

**Prerequisites**

Note: To run Nginx locally with HTTPS, generate a self-signed certificate in the nginx/ssl directory using: 
`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt`

**Running with Docker Compose**
1. Copy the provided `.env.example` file to create your own `.env` file.
2. Build and start the containers:
`
docker-compose up --build
`
Once running, you can access the frontend at https://localhost.

**Running with Kubernetes**
If you want to test the orchestration instead, ensure your local cluster (e.g., Minikube) is running, then apply the manifests directly:
`
kubectl apply -f database.yml
kubectl apply -f backend.yml
kubectl apply -f frontend.yml
kubectl apply -f mongoexpress.yml
`
