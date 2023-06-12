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



// function that starts the prompt to the user using node.js
function init() {

  inquirer.prompt(questions)

    .then(function (answers) {

      switch (answers.user_choice) {
        case 'View all departments':
          console.log('\nViewing departments...');
          break;

        case 'View all roles':
          console.log('\nViewing all roles...');
          break;

        case 'View all employees':
          console.log('\nViewing all employees...');
          break;

        case 'Add a department':
          console.log('\nAdding a department...');
          break;

        case 'Add a role':
          console.log('\nAdding a role...');
          break;


        case 'Add an employee':
          console.log('\nAdding an employee...');
          break;

        case 'Update an employee role':
          console.log('\nUpdating role...');
          break;


      };

      init();

      connection.query(
        'SELECT * FROM department',
        function (err, results, fields) {
          console.table(results); // results contains rows returned by server


        }
      );

    })
};

init();
