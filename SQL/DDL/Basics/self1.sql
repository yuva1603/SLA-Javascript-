SELECT * FROM practice.books;

-- 1. Display books published after 2020  
select * from books where published_year>2020;


-- 2. Show the names of members who live in mumbai ?
select * from members where city <=> "mumbai";


-- 3. List all books borrowed by priya singh ?
select b.title 
from borrowed br
join members m on br.member_id=m.member_id
join books b on br.book_id = b.book_id
where m.name='priya singh';


-- 4. count members who borrowed book in 2022?
select count(distinct member_id) as 2022_members
from borrowed
where year(borrow_date)=2022 




    