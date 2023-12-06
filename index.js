const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, contributing, tests }) =>
`# ${title}

## Description

${description}

## Table of Contents

## Installation

${installation}

## Usage

${usage}

## License

## Contributing

${contributing}

## Tests

${tests}

## Questions
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project\'s title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution instructions:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
