// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.decription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  To add a screenshot, create an assets/images folder in your repository and 
  upload your screenshot to it. Then, using the relative filepath, add it to 
  your README.

  ## License
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
