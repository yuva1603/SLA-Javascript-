CREATE database sla_database;
use sla_database;
CREATE TABLE fivetosix (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    course_id INT,
    fees INT,
    FOREIGN KEY (course_id)
        REFERENCES course (course_id)
);

CREATE TABLE course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(20)
);

CREATE table management.family(
	id int primary key auto_increment,
	name varchar(30),
    Contact_number int,
    joining_date date,
    Role varchar(25)
);
