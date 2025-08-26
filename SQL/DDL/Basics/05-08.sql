create database company_db;
use company_db;

Create table employees(
	id int primary key auto_increment,
    emp_id int,
    emp_name varchar(30),
    salary varchar(30),
    dept_id int 
);


insert into employees (id,emp_id,emp_name,salary,dept_id) values (6,106,"New",30000,"CSE-1"),(7,107,"Bharath",40000,"MECH-009");
update employees set emp_name="React New", salary=500000, dept_id=102 where emp_id=12;
delete from employees where emp_name="New";