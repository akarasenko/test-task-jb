# Use the official Cypress base image
FROM cypress/included:13.16.1

WORKDIR /e2e

RUN apt update && \
    apt install -y chromium openjdk-17-jdk 

COPY package.json ./

RUN npm install

# Copy the Cypress test files and configuration
COPY cypress/ ./cypress
COPY cypress.config.js ./

# Expose the port for Allure (default is 4040)
EXPOSE 4040

# Run Cypress tests with Chromium, then start the Allure report server
ENTRYPOINT ["sh", "-c", "npm run cypress:run:docker && npm run allure:serve"]
