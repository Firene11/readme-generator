// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
          type: 'input',
          name: 'link',
          message: 'Enter your project link',
        },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which type of license did you use?',
        choices: ['MIT', 'Apache 2.0', 'Mozilla', 'None']
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Describe how to contribute to the project',
      },
      {
          type: 'input',
          name: 'tests',
          message: 'Describe the project test instructions?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your github name:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your e-mail address:',
        },
]


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile('README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mdContent = generateMarkdown(data)
        fs.writeFile('README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
        console.log(data)
        return data
        
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
