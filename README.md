# TradeTracker Website

This repository contains the source code for the TradeTracker corporate website.

## Overview

The TradeTracker website is a PHP-based affiliate marketing platform that connects advertisers with publishers. It provides tools for publishers to promote advertisers' products and services.

## Getting Started

To get started with the TradeTracker website, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

   ```bash
   git clone https://github.com/trisharuz/tradeTracker.git
   
2.  **Build Docker Image**: Navigate to the project directory and build the Docker image using the provided Dockerfile.
  
    ```bash
    docker build -t playwright-tests .
    ```
3. **Run Playwright Tests in Docker Container**: Once the Docker image is built, you can run the Playwright tests inside a Docker container.
    ```bash
    docker run playwright-tests
    ```
This command will execute the Playwright tests within the Docker container and display the test results.
