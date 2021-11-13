function renderLicenseBadge(data) {
  if (data.License !== "none") {
    return `![license](https://img.shields.io/badge/License-${data.License}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.License !== "none") {
    return '[Link to Licenses](https://shields.io)'
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.License !== "none") {
    return '## Licensing'
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    `# ${data.Title}

  
  ## Description: 
  ${data.Description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Test Info](#Test-Info)
  - [Questions](#Questions)
  ## Installation: 
  ${data.Installation}
  ## Usage: 
  ${data.Usage}
  ## Contributing: 
  ${data.Contributions}
  ## Test Info: 
  ${data.Tests}
  `+renderLicenseSection(data) +`
  `+renderLicenseBadge(data) +`
  `+renderLicenseLink(data) +`
  ## Questions
  - If you have any questions, email me at ${data.Email}
  - Checkout my GitHub profile [here](https://github.com/${data.Github})
`
  );
}

module.exports = generateMarkdown;