const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require('Engineer')
const Manager = require('Manager')
const Intern = require('Intern')
const employees = []


inquirer 
    .prompt([
        {
            name: 'name',
            message: 'Enter team members name.',
            type: 'input'
        },
        {
            name: 'role',
            type: 'list',
            message: 'Enter a team members role',
            choices: [
                'Engineer',
                'Manager',
                'Intern'
            ],
        }
        
    ])








// fs.writeFile('Index.html', hell, (err) => {
// if (err) throw err;
// })