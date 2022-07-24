const { writeFile } = require('fs');
const inquirer = require('inquirer'); // installed with "npm i inquirer@8.2.4"
const { generateMd } = require('./utils/generateMd.js');


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub name?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license does your project have?',
            choices: ['MIT', 'Unlicense', 'GNU AGPL', 'GNU APL', 'GNU LGPL', 'Mozilla Public', 'Apache', 'Boost Software'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'What technologies did you use to build this project?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js'],
            validate: technologiesInput => {
                if (technologiesInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the purpose of using your application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe how someone might test your product, post-download.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Describe your stance on contributions to this project?',
            validate: contributionsInput => {
                if (contributionsInput) {
                    return true;
                } else {
                    console.log('Please enter valid information to proceed.');
                    return false;
                }
            }
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
        console.log(data.license);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'visual',
                message: 'Enter the relative path for the image file you would like to include.'
            }
        ]);
    } else {
        return data;
    }
}

// write README file
function writeToFile(file) {
    writeFile('./dist/README.md', generateMd(file), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log("File successfully written");
        }
    });
}

questions()
    // .then(data => confirmVisualFile(data)) // How do I add this in without breaking the .then chain?
    .then(file => writeToFile(file))
    .then(err => console.log(err));