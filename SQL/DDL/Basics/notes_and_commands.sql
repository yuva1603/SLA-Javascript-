ALTER TABLE newstudenttable ADD column stu_email varchar(20); -- new column add
alter table newstudenttable modify column stu_role int; -- datatype change
alter table newstudenttable drop column stu_email; -- column delete
alter table newstudenttable add column stu_email varchar(20); -- column add
alter table newstudenttable rename column stu_email to email_stu; -- rename change
alter table newstudenttable rename to newstu; -- table rename
truncate table newstu; -- clear all the datas form table

-- DML (Data Manipulation Language) - manipulation of datas using INSERT , DELETE , MODIFY
insert into newcoursetable (cur_id,course_name) values(123,"FS PYTHON");
