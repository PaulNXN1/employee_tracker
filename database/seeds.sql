INSERT INTO department (name)
VALUES ("Lost Prevention"),
       ("IT");


INSERT INTO role (title,salary,department_id)
VALUES ("LP Manager", 75000, 1),
       ("LP Associate", 50000, 1), 
       ("IT L1", 65000, 2),
       ("IT Manager", 100000, 2);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "Nixon", 4, NULL),
       ('Dan', 'Johnson', 3, 1);

