const Manager = require('./Main/lib/Manager');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template');

const teamMembers = [];
// deploys the html and asks if you want to add an employee
function employeeStats() {
  // showHTML();
  addEmployee();
}
// asks questions to add an employee

function addEmployee() {
  
inquirer.prompt([
    {
      type: 'input',
      message: "Please enter the employee's name",
      name: 'memberName',
    },
    {
      type: 'input',
      message: "Please enter the employee's ID",
      name: 'id'
    },
    {
      type: 'input',
      message: "Please enter the employee's email",
      name: 'email',
    },
    {
      type: 'list',
      message: "Please choose the employee's title",
      choices: ["Manager" , "Engineer", "Intern"],
      name: 'role',
    }
  ])

.then(function({memberName, id, email, role}){
  let employeeData = '';
  if (role === "Manager") {
    employeeData = 'Office Number'
  } else if (role === "Engineer") {
    employeeData = 'GitHub'
  } else if (role === "Intern") {
    employeeData = 'School'
  }
  
  inquirer.prompt([
    { 
      type: 'Input',
      message: `Please enter the ${employeeData} of the employee`,
      name: 'employeeInfo'
    },
    {
      type: 'list',
      message: "Would you like to add another team member?",
      choices: ['Yes', 'No'],
      name: 'addEmployee',
    }
  ])
   
//   ])}.then(function({employeeInfo, addEmployee}) {
//     let newEmployee;
//     if (role === "Manager") {
//       newEmployee = new Manager(memberName, id, email, employeeData);
//     } else if (role === "Engineer") {
//         newEmployee = new Engineer(memberName, id, email, employeeData);
//       } else { (role === "Intern") 
//         newEmployee = new Intern(memberName, id, email, employeeData);
//       }
      
//       // push onto teamMember array
//       teamMembers.push(newEmployee);
//     })
// )}



// need to learn how to write the file

  // fs.writeFile('page-template')


// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js
})}

addEmployee();