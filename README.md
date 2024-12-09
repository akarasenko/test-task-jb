# Test task

## Decription
The project contains autotests for checking the Buy page for IntelliJ IDEA https://www.jetbrains.com/idea/buy/
The project is based on JavaScript and Cypress.
The Page Object Pattern is used to organize the code.
The Cypress configuration for the progect e.g. base URL of the application can be found in cypress.config files.
The test files can be found in the /cypress/e2e folder.
The pages files can be found in the /cypress/pages folder.

## Set up
1. Make sure you have Node.js installed
2. Run command
   ```npm install```

## Run tests
The tests can be run in two modes:
1. To open the Cypress App use command
   ```npm run cypress:open```
   Then choose E2E Testing, choose the browser and run tests
2. To run tests command
   ```npm run cypress:run```
   The tests are run without opening Cypress App
   To run only a specific spec file add flag 
   ```--spec 'path/to/files/*.spec.js'```

## Run tests in Docker
To run tests in Docker use commands: 
   ```docker build -t cypress-allure .```
   ```docker run -it --name cypress-container -p 4040:4040 cypress-allure```
By default the tests are run in Chromium browser as M Mac version of Docker image cypress/included does not contain Chrome

## See the run resuls in Allure report
After the tests are run you may see the Allure report with command 
   ```npm run allure:serve```
Then open the report on http://localhost:4040/ 
   