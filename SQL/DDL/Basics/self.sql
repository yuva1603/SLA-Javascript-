create database practice;
use practice;
create table books(
	book_id int primary key,
    title varchar(30),
    author varchar(30),
    price int ,
    published_year int
);

create table members(
	member_id int primary key,
    name varchar(30),
    join_date date,
    city varchar(30)
);

create table borrowed(
	borrow_id int primary key,
    member_id int ,
    book_id int,
    borrow_date date,
    return_date date
);