CREATE DATABASE taskdb;
use taskdb;

-- create table orders(
-- 	OrderId int primary key auto_increment,
--     CustomberID int,
--     CustomerID int,
--     OrderDate date,
--     Amouint int
-- );
-- drop table orders;

create table customers(
	id int primary key auto_increment,
    name varchar(30),
    email varchar(30),
    city varchar(30)
);

create table orders(
	OrderId int primary key auto_increment,
    CustomerID int,
    OrderDate date,
    Amouint int
);

-- insert into customers(name,email,city) values('Ravi','Ravi@gmail.com','Chennai'); 
insert into customers(name,email,city) values('Priya','Priya@gmail.com','Bangalore');
insert into customers(name,email,city) values('Arjun','Arjun@gmail.com',null);
insert into customers(name,email,city) values('Meera',null,'Chennai');

Insert into orders(orderid,customerid,orderdate,amouint) values(101,1,'2023-01-10',2500);
Insert into orders(orderid,customerid,orderdate,amouint) values(103,1,'2023-02-14',1800);
Insert into orders(orderid,customerid,orderdate,amouint) values(102,2,'2023-01-18',3000);
Insert into orders(orderid,customerid,orderdate,amouint) values(104,3,'2023-02-20',1500);
Insert into orders(orderid,customerid,orderdate,amouint) values(105,4,'2023-03-05',2200);

-- Insert a new customer into Customers.
insert into customers(id,name,email,city) values(5,'sachin','sachin@gmail.com','Hyderabad');
-- Update the city of customer Arjun to "Delhi".
update customers set city ="Delhi" where name = "Arjun";

-- Delete the order with OrderID = 105.
delete from orders where orderid = 105;

-- Show all customers who live in "Chennai".
select * from customers where city = 'chennai';

-- Find all orders greater than 2000.
-- SELECT * FROM Orders WHERE Amouint > 2000;
select amouint,customerid from orders where amouint > 2000;

-- show all the customers with their orders (customername,orderid,amount) ?--  
select name,orderid,amouint from customers as c inner join orders as o where c.id = o.customerid;






