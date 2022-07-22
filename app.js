const fs = require('fs');
const inquirer = require('inquirer'); // installed with "npm i inquirer@8.2.4"

const questions = () => {
    return inquirer.prompt([
        {
            type: 'output',
            name: 'sampleQuestion',
            message: 'This is a sample question: How are you today?'
        }
    ]);
}

questions().then(data => console.log(data));