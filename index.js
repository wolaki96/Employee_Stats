const Manager = require('./Main/lib/Manager');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

// deploys the html and asks if you want to add an employee
function emlpoyeeStats() {
  // showHTML();
  addEmployee();
}

function addEmployee() {


inquirer
  .prompt([
    {
      type: 'input',
      message: "Please enter the employee's name",
      answer: 'name',
    },
    {
      type: 'input',
      message: "Please enter the employee's ID",
      answer: 'id'
    },
    {
      type: 'input',
      message: "Please enter the employee's email",
      answer: 'email',
    },
    {
      type: 'list',
      message: "Please choose the employee's title",
      choices: ["Manager" , "Engineer", "Intern"],
      answer: 'role',
    }
  ])

.then(function({name, id, email, role}){
  let employeeData = '';
  if (role === "Manager") {
    employeeData = 'Office Number'
  } else if (role === "Engineer") {
    employeeData = 'GitHub'
  } else if (role === "Student") {
    employeeData = 'School'
  }

  inquirer.prompt([
    { 
      type: 'Input',
      message: `Please enter the ${employeeData} of the employee`,
      answer: 'employeeInfo',

    },
    {
      type: 'boolean',
      message: "Would you like to add another team member?",
      name: 'addEmployee',
    }
  ])}.then(function({addEmployee, employeeData}) {
    let newEmployee;
    if (role === "Manager") {
      newEmployee = new Manager(name, id, email, employeeData);
      if (role === "Engineer") {
        newEmployee = new Engineer(name, id, email, employeeData);
      }
      if (role === "Intern") {
        newEmployee = new Intern(name, id, email, employeeData);
      }

    }
  }
  ))}
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