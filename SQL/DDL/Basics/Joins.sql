use company_db;
Create table orders(
	order_id int primary key,
    customerID int,
    order_date date,
    amount decimal(10,2),
    foreign key (customerID) references customers (customerID)
);

create table customers(
	customerID int primary key,
    name varchar(50),
    email varchar(50)
);