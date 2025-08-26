CREATE DATABASE newemp;
USE newwmp;
CREATE TABLE departments(
	dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees(
	emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    salary DECIMAL(10,2),
    manager_id INT
);



