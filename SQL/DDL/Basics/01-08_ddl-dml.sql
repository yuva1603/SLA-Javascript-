use newdbnew;
CREATE TABLE newcoursetable (
    cur_id VARCHAR(20) PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(20)
);

drop table newcoursetable;
CREATE TABLE newstudenttable (
    id INT PRIMARY KEY AUTO_INCREMENT,
    stu_name VARCHAR(20),
    stu_role INT,
    course_id VARCHAR(20)
);

CREATE TABLE surya (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_name varchar(30)
);







