# DevOps Project 02: Continuous Delivery Pipeline for a Web Application

## Overview

This DevOps project guides you through the process of creating a Continuous Delivery Pipeline for a web application using various AWS services. The pipeline is designed to automate the deployment process, from source code management to application deployment and testing.

### Services Used

1. **GitHub**
2. **AWS Elastic Beanstalk**
3. **AWS CodeBuild**
4. **AWS CodePipeline**

## Project Structure

### Diagram

The diagram below illustrates the flow of services in this tutorial:

```
GitHub --> AWS Elastic Beanstalk
        \-> AWS CodeBuild
        \-> AWS CodePipeline
```

## Getting Started

Follow the steps below to set up and execute the Continuous Delivery Pipeline for your web application:

### 1️⃣ Set up GitHub Repository

Create a GitHub repository to store your web application code. Initialize the repository with your application codebase.

### 2️⃣ Create AWS Elastic Beanstalk Environment

Set up the environment where your web application will be deployed using AWS Elastic Beanstalk. Configure the environment with the necessary settings and deploy your application.

### 3️⃣ Configure and Execute AWS CodeBuild

Create a build process for your application using AWS CodeBuild. Configure the build specifications, environment variables, and source code settings. Execute the build process to ensure successful compilation and packaging.

### 4️⃣ Build and Deploy with AWS CodePipeline

Create an AWS CodePipeline to automate the entire build and deployment process. Connect GitHub as the source stage, AWS CodeBuild as the build stage, and AWS Elastic Beanstalk as the deployment stage.

### 5️⃣ Add Review Stage to the Pipeline

Enhance the pipeline by adding a review stage. Test its execution to ensure that changes made to the application code are appropriately reviewed before deployment.

## Contributions and Feedback

Contributions, bug reports, and feedback are welcome! Feel free to open an issue or create a pull request.
