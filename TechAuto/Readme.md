# End to End MakeWithTech Web Automation Testing
## Prerequisite 
- Node (v16.17.0) or Greater version [link](https://www.npackd.org/p/org.nodejs.NodeJS64/14.17.4) 
- VS Code (v1.76) or Greater version [link](https://code.visualstudio.com/docs/?dv=win) 

## Setup Windows and Mac OS
### Install the node and virtual studio code
   - Download node.js (v16.17.0) or Greater version [link](https://www.npackd.org/p/org.nodejs.NodeJS64/16.17.0) 
  - Install node.msi file 
  - Set environment variable for node
  - To check the node version by running following command 
  `node --version`
  - Download and install Visual Studio Code(v1.76.0S) or Greater version [link](https://code.visualstudio.com/docs/?dv=win) 

  ### Setup Account for Testing
  - An account "test-account-mwt" with a password of "MakeWithTechTesting" must exist on the build you are testing
  - A search for BOX must return at least one model

### Install required packages
  - Clone Repository:  
   - Open command prompt and Navigating to project Directory(front-end)
   - Run command  `npm install`

## Open project and run the tests
- Open the project in VS Code
 - Open Terminal in VS Code
 - For UI Cypress Run Command `npx cypress open` It will open the UI of cypress and shows all feature files
 - For headless Run Command `npx cypress run`

 ## Setting Test Environment

 You can set the env to models.makewithtech.com, test.makewithtech.com or dev.makewithtech.com.

 **You must log our of the models application from Chrome if you interactively logged in before running the test.***

 ```
  npx cypress open --env appUrl="https://models.makewithtech.com/"  
  npx cypress run --env appUrl="https://models.makewithtech.com/"

  npx cypress open --env appUrl="https://test.makewithtech.com/"
  npx cypress run --env appUrl="https://test.makewithtech.com/"

  npx cypress open --env appUrl="https://dev.makewithtech.com/"
  npx cypress run --env appUrl="https://dev.makewithtech.com/"

 ```

- To run a single test:

 ```
  npx cypress run --env appUrl="https://test.makewithtech.com/" --spec cypress/e2e/features/ThingiverseBasicTest.feature

  npx cypress run --env appUrl="https://test.makewithtech.com/" --spec cypress/e2e/features/MakeWithTechComments.feature

 ```

## How to generate automation test reports

- After Running Test cases Following command will Generate Test Report.
 ```
  npm run report

 ```
- Report file will be generated in the `reports` folder.
- Open the report `index.html` into browser

