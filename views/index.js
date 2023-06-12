const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FreyaRose',
  database: 'employee_tracker_db'
});

const questions = [

  {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    name: 'user_choice',
  }];


function viewDepartments() {

  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};


function viewRoles() {

  connection.query(
    'SELECT * FROM role',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};


function viewEmployees() {

  connection.query(
    'SELECT * FROM employee',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};



function addDepartment() {


  inquirer.prompt([{
    type: 'input',
    message: 'What is the name of the department?',
    name: 'departmentName'
  }]).then(function (answers) {

    connection.query(
      "INSERT INTO department (name) VALUES (?)", [answers.departmentName] , function (err, results, fields) {
        console.table(results); // results contains rows returned by server

        init();
      }

    )
  })



  // connection.query(
  //   'SELECT * FROM department',
  //   function (err, results, fields) {
  //     console.table(results); // results contains rows returned by server

  //     init();
  //   }
  // );

};


function addRole() {

  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};


function addEmployee() {

  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};


function updateRole() {

  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};



// function that starts the prompt to the user using node.js
function init() {

  inquirer.prompt(questions)

    .then(function (answers) {

      switch (answers.user_choice) {
        case 'View all departments':
          console.log('\nViewing departments...\n\n');
          viewDepartments();
          break;


        case 'View all roles':
          console.log('\nViewing all roles...\n\n');
          viewRoles();
          break;

        case 'View all employees':
          console.log('\nViewing all employees...\n\n');
          viewEmployees();
          break;

        case 'Add a department':
          console.log('\nAdding a department...\n\n');
          addDepartment();

          break;

        case 'Add a role':
          console.log('\nAdding a role...\n\n');
          break;


        case 'Add an employee':
          console.log('\nAdding an employee...\n\n');
          break;

        case 'Update an employee role':
          console.log('\nUpdating role...\n\n');
          break;


      };





    })
};

init();
