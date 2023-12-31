// A function that returns a license badge based on which license is passed in. 

function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  }
}

// A function that returns the license link

function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
}

// A function that returns the license section of README

function renderLicenseSection(license) {
  return license === 'None'
  ? ''
  : `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// A function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}\n
  ${data.link}

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
  [GitHub](https://github.com/${data.github}/)\n
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
