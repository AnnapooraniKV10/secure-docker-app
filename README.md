# Secure Docker CI/CD App

Node.js app containerized using Docker and deployed to AWS ECR via CI/CD pipeline.

# DevSecOps CI/CD Pipeline with Docker, GitHub Actions & AWS ECR

## Project Overview
This project demonstrates a **secure CI/CD pipeline** for a containerized Node.js application using **GitHub Actions and AWS**. It follows the **AWS Well-Architected Framework (Security Pillar)** by integrating security at every stage of the pipeline.

The pipeline automates:
- Code validation
- Docker image build
- Vulnerability scanning
- Secure image storage in AWS ECR

---

## Architecture

```

Developer → GitHub Repository → GitHub Actions (CI Pipeline)
→ ESLint & npm audit
→ Docker Build
→ Trivy Scan
→ AWS ECR (Private Registry)
→ ECR Image Scan

```

---

## Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Containerization:** Docker, Docker Compose  
- **CI/CD:** GitHub Actions  
- **Security:** Trivy, npm audit, ESLint  
- **Cloud:** AWS ECR (Elastic Container Registry)  

---

## Features

- REST API for task management  
- Dockerized application with MongoDB  
- Automated CI pipeline using GitHub Actions  
- Integrated vulnerability scanning (Trivy + ECR)  
- Secure container image storage (Private ECR)  
- Follows DevSecOps best practices  

---

## Project Structure

```

devops-secure-docker/
│── app.js
│── package.json
│── Dockerfile
│── docker-compose.yml
│── .github/workflows/ci.yml
│── models/
│── routes/

```

---

## CI/CD Pipeline Workflow

On every `git push`, the pipeline performs:

1. Checkout Code  
2. Install Dependencies  
3. Code Quality Check (ESLint)  
4. Security Check (npm audit)  
5. Build Docker Image  
6. Scan Image using Trivy  
7. Login to AWS ECR  
8. Push Image to ECR  
9. ECR Vulnerability Scan  

---

## Security Best Practices Implemented

- Static code analysis using ESLint  
- Dependency vulnerability scanning using npm audit  
- Container image scanning using Trivy  
- AWS ECR built-in image scanning  
- Private container registry (ECR)  
- Minimal base image (`node:18-alpine`)  
- Environment variables for secrets  
- Reduced container attack surface  

---

## Run Locally (Docker)

### 1. Clone Repository
```

git clone [https://github.com/AnnapooraniKV10/secure-docker-app.git]
cd devops-secure-docker

```

### 2. Start Application
```

docker-compose up --build

```

### 3. Access Application
```

[http://localhost:3000](http://localhost:3000)

```

---

## API Testing

### Create Task
```

curl -X POST [http://localhost:3000/tasks](http://localhost:3000/tasks) 
-H "Content-Type: application/json" 
-d '{"name":"Test Task"}'

```

### Get Tasks
```

curl [http://localhost:3000/tasks](http://localhost:3000/tasks)

```

---

## AWS ECR Configuration

- Repository: `devops-secure-docker`  
- Image Tag: `latest`  
- Scan Status: **COMPLETE**  

---

## Project Links

**GitHub Repository:**  
https://github.com/AnnapooraniKV10/secure-docker-app.git 

**GitHub Actions (CI/CD):**  
https://github.com/AnnapooraniKV10/secure-docker-app/actions

**Presentation (PPT):**  
https://canva.link/hthl0653if0qt6g
---

## Verification Checklist

- Docker containers running (`docker ps`)  
- API working via curl  
- GitHub Actions pipeline successful  
- Image pushed to AWS ECR  
- ECR scan status = COMPLETE  

---

## Future Enhancements

- Deploy to AWS ECS (Fargate)  
- Add Application Load Balancer (ALB)  
- Use AWS Secrets Manager  
- Enable HTTPS  
- Add monitoring with CloudWatch  

---

## References

- AWS Well-Architected Framework  
- Amazon ECR Documentation  
- Trivy Security Scanner  
- Docker Documentation  

---

## Author

Annapoorani K V
```



