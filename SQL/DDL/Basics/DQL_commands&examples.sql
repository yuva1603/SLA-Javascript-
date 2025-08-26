use company_db;

Select * from employees;
 
SELECT emp_name,salary FROM employees;

SELECT * FROM employees LIMIT 3;

SELECT dept_id FROM employees GROUP BY dept_id;

SELECT dept_id,count(*) AS total_emp FROM employees GROUP BY dept_id;

SELECT count(*) AS total_emp FROM employees GROUP BY dept_id;

SELECT count(*) AS total_emp FROM employees GROUP BY emp_name;

SELECT * FROM employees ORDER BY salary desc;

SELECT * FROM employees ORDER BY dept_id ASC;

SELECT * FROM employees WHERE salary >= 12000;    

SELECT salary,emp_name FROM employees WHERE salary >= 12000;

 SELECT dept_id,emp_name,salary FROM employees GROUP BY dept_id,emp_name,salary HAVING avg(salary) >= 12000;
 
 SELECT DISTINCT dept_id FROM employees;
 
 SELECT dept_id,emp_name,salary,count(*) as Filtered_data FROM employees GROUP BY dept_id,emp_name,salary HAVING avg(salary) >= 12000; 

SELECT count(salary) FROM employees;