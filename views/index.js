const inquirer = require('inquirer');
const mysql = require('mysql2');

// Creating the mysql2 connection // 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FreyaRose',
  database: 'employee_tracker_db'
});



// Question array that displays for the user when the application starts. 
const questions = [

  {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    name: 'user_choice',
  }];


// functions that take place after user selects which item to proceed with from the "questions" array. 


// DONE

// Once selected, the user will be able to see all current roles in the database: employee_tracler.db 

function viewDepartments() {

  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};

// DONE
// Once selected, the user will be able to see all current roles in the database: employee_tracler.db 

function viewRoles() {

  connection.query(
    'SELECT * FROM role',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};

// DONE
// Once selected, the user will be able to see all current employees in the database: employee_tracler.db 

function viewEmployees() {

  connection.query(
    'SELECT * FROM employee',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server

      init();
    }
  );

};

// DONE
// Once selected, the user will be able to add a new department(s) in the database: employee_tracler.db 

function addDepartment() {


  inquirer.prompt([{
    type: 'input',
    message: 'What is the name of the department?',
    name: 'departmentName'
  }]).then(function (answers) {

    connection.query(
      "INSERT INTO department (name) VALUES (?)", [answers.departmentName], function (err, results, fields) {
        console.table(results); // results contains rows returned by server

        init();
      }

    )
  })
};


// Once selected, the user will be able to add a role in the database: employee_tracler.db

function addRole() {

  inquirer.prompt([{
    type: 'input',
    message: 'What is the name of new role?',
    name: 'newRole'
  },

  {type: 'input',
  message: 'What is the salary?',
  name: 'salary'},

  {type: 'input',
  message: 'What is the department ID?',
  name: 'department_id',
  choices: [1,2,3,4,5]
  }
])
  
  .then (function(answers) {

    connection.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answers.newRole, answers.salary, answers.department_id], function (err, results, fields) {

        console.table(results); // results contains rows returned by server

        init();

      })})};


  function addEmployee() {

    inquirer.prompt([{
      type: 'input',
      message: 'What is the first name of new employee?',
      name: 'first_name'
    },

    {type: 'input',
     message: 'What is the last name?',
     name: 'last_name'},


     {type: 'input',
     message: 'What department does this new hire work in?',
     choices: [1,2,3,4],
     name: 'newDept'
    },
  

  ])

    .then (function(answers) {

      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id)) VALUES (?,?,?)", [answers.first_name, answers.last_name, answers.newDept], function (err, results, fields) {
  
          console.log(results); // results contains rows returned by server
  
          init();
  
        })})
    

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
            addRole();
            break; 


          case 'Add an employee':
            console.log('\nAdding an employee...\n\n');
            addEmployee();
            break;

          case 'Update an employee role':
            console.log('\nUpdating role...\n\n');
            updateRole();
            break;


        };





      })
  };

  init();
