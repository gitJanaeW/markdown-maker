const fs = require('fs');
const inquirer = require('inquirer'); // installed with "npm i inquirer@8.2.4"

const {writeFile, copyFile} = require('./utils/generateMd.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'What technologies did you use to build this project?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your project, post download.'
        },
        {
            type: 'checkbox',
            name: 'liscense',
            message: 'What type of license does your project have?',
            choices: ['MIT', 'other options idk']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What is your stance on contributions to this project?'
        },
        {
            type: 'confirm',
            name: 'visualConfirm',
            message: 'Would you like to use a JPG, PNG or GIF in your README.md?',
            default: false
        }
    ]);
}

// How do I add this in without breaking the .then chain?
const confirmVisualFile = data => {
    if (data.visualConfirm) {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'visual',
                message: 'Enter the relative path for the image file you would like to include.'
            }
        ]);
    }
    else {
        return data;
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();

questions()
    // .then(confirmVisualFile) // How do I add this in without breaking the .then chain?
    .then(data => console.log(data));