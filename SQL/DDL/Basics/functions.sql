use management;
CREATE TABLE Employees(
	emp_id int primary key auto_increment,
    emp_name varchar(30),
    emp_role varchar(30),
    emp_salary int
);

INSERT INTO employees(emp_id,emp_name,emp_role,emp_salary) values(34,"Saravanan","Student-trainer",30000);
update employees set emp_name="Full-Stack" where emp_id=37;





-- DML 
-- use company_db;
-- insert into employees (emp_id,emp_name,salary,dept_id) values (34,"New",30000,104);
-- update employees set emp_name="React New", salary=500000, dept_id=102 where emp_id=12;
-- delete from employees where emp_name="New";