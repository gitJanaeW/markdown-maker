// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMd(data) {
    return `
    ${data.license}
    
    # ${data.title}
    
    ## Table of Contents

    COMING SOON
  
    ## Description

    ${data.description}

    ## Technologoies
    ${data.technologies.join("\n - ")}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contributions}

    ## Tests

    ${data.test}

    ## Questions

    Please reach out with questions via GitHub or email:
    - github.com/${data.github}
    - ${data.email}
`;
}

module.exports = {generateMd};