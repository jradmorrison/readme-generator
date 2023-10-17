const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a short description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Give any necessary instructions to install your application',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Give a short description of how to use your application',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select a license',
        choices: ['None', 'MIT', 'Other'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Inform the user how to contribute to the project',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide instructions for testing the application',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
}

function init() {
    inquirer
        .prompt(questions).then((response) => { writeToFile('README.md', response)});
}

init();
