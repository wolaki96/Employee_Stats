const Manager = require('./Main/lib/Manager');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, './Main/Dist');
const distPath = path.join(DIST_DIR, 'index.html');
const generateHTML = require('./src/page-template');

const teamMembers= [];
// deploys the html and asks if you want to add an employee
function employeeStats() {
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
    },
   
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
      type: 'input',
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
   // add new employee
  .then(function(data) {
    let newEmployee;
    if (role === "Manager") {
      newEmployee = new Manager(memberName, id, email, employeeData);
    } else if (role === "Engineer") {
        newEmployee = new Engineer(memberName, id, email, employeeData);
      } else { (role === "Intern") 
        newEmployee = new Intern(memberName, id, email, employeeData);
      }
    // push onto teamMember array
      teamMembers.push(newEmployee);
     if (data.addEmployee === 'Yes') {
      addEmployee()
     } else {
      showhtml(JSON.stringify(teamMembers));
      return 
     }
    
    return
  
    })




// need to learn how to write the file

// fs.writeFile('/dist/dist.html')

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js
})}
function showhtml(teamMembers) {
  fs.writeFileSync(distPath, generateHTML(teamMembers), (err) =>
      err ? console.error(err) : console.log('HTML file saved as index.html in dist folder')
  )
}

employeeStats();