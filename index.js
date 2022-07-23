const { writeFile } = require('fs');
const inquirer = require('inquirer'); // installed with "npm i inquirer@8.2.4"
const { generateMd } = require('./utils/generateMd.js');


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
            name: 'liscense',
            message: 'What type of license does your project have?',
            choices: ['MIT', 'other options idk']
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
            message: 'Describe the purpose of using your application.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe how someone might test your product, post-download.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Describe your stance on contributions to this project?'
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

// write README file
function writeToFile(file) {
    writeFile('./dist/README.md', generateMd(file), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File successfully written");
        }
    });
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();

questions()
    // .then(data => {
    // confirmVisualFile(data)}) // How do I add this in without breaking the .then chain?
    .then(file => writeToFile(file));