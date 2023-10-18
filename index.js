const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a short description of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Give any necessary instructions to install your application:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Give a short description of how to use your application:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select a license -',
        choices: ['None', 'MIT', 'Other'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Inform the user how to contribute to the project:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Provide instructions for testing the application:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email'
    },
];

let fileName = 'README.md'

// Function to create README populate with data built by buildReadMe func
function writeToFile(fileName, data) {
    //? console.log(data);
    let readMeContent = buildReadMe(data);
    //? console.log(readMeContent);
    fs.writeFile(fileName, readMeContent, (err) => err ? console.error(err) : console.log('Document created!'));
}

// Function to build read me structure using data from prompts
function buildReadMe(data) {
    //* Title and Description
    let content =
    `# ${data.title}

    ## Description
    
    ${data.description}
    
    `
    //* Table of contents
    content += 
    `## Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contribute](#contribute)
    -[Test](#tests)
    -[Questions](#questions)
    
    `
    //* Installation and usage
    content += 
    `## Installation
    
    ${data.installation}
    ## Usage
    ${data.usage}
    
    ![alt text](assets/images/screenshot.png)
    
    `
    //* License
    content += 
    `## License
    
    ${data.license}
    
    `
    //* Contributing, tests, and question
    content += 
    `## How to Contribute
    
    ${data.contribute}
    
    ## Tests
    
    ${data.tests}
    
    ## Question?
    
    [My Github](https://github.com/${data.github})
    
    ${data.email}`

    return content;
}

function init() {
    inquirer
        .prompt(questions).then((data) => writeToFile(fileName, data));
}

init();
