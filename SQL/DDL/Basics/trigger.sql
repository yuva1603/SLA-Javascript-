use taskdb;
create table emp_log(
	
    log_id int primary key auto_increment,
    Cus_Id int,
    action varchar(200),
    log_time timestamp default current_timestamp
);

drop table emp_log;

update customers set email = "enog@gmail.com" where Cus_id=3;
 
alter table emp_log  rename column Cus_id to Cusid;

DELIMITER $$

CREATE TRIGGER newlog AFTER INSERT ON customers
FOR EACH ROW
BEGIN
INSERT INTO emp_log(CusId,action,log_time) VALUES (new.id,'i am insert new date',Now());

end$$

DELIMITER ;

create table update_log2(
	
    log_id int primary key auto_increment,
    Cus_Id int,
    name varchar(200),
    action varchar(200),
    log_time timestamp default current_timestamp
);

drop table update_log;

ALTER TABLE update_log RENAME COLUMN CUS_ID TO CUSID;

DELIMITER $$

CREATE TRIGGER updatelog AFTER UPDATE ON customers
FOR EACH ROW
BEGIN
INSERT INTO update_log2(CusId,name,action,log_time) VALUES (new.id,new.name,'update',Now(),old.name);

end$$

DELIMITER ;

DROP TRIGGER IF exists UPDATELOG;

-- Task 1 
-- 1.Audit log()
-- 2.backup delete(employee old value(id,name,salary))
-- 3.salary update()