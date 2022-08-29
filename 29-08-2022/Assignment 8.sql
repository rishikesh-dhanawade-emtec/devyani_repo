USE sales_db;

-- Write a query that uses a subquery to obtain all orders for the customer named Cisneros. Assume
-- you do not know his customer number (cnum).
SELECT onum AS order_num FROM orders WHERE cnum IN (SELECT cnum FROM customers WHERE cname = 'Cisneros')

-- Write a query that produces the names and ratings of all customers who have above- average orders.
SELECT cname, rating from customers WHERE cnum in (select cnum from orders where amt > (select avg(amt) from orders));

-- Write a query that selects the total amount in orders for each salesperson for whom this total is 
-- greater than the amount of the largest order in the table.
SELECT SUM(amt) AS 'Total Amount' FROM orders GROUP BY snum HAVING SUM(amt) > (SELECT MAX(amt) FROM orders);

-- Write a query that selects all customers whose ratings are equal to or greater than ANY of Serres.
SELECT * FROM customers WHERE rating >= ANY (SELECT rating FROM customers WHERE snum IN (SELECT snum FROM salespeople WHERE sname = 'serres'));

-- Write a query using ANY or ALL that will find all salespeople who have no customers located in their city.
select a.sname,a.city,b.cname,b.city as cus_city from salespeople a,customers b where a.snum=b.snum and a.city!=b.city;

-- Write a query that selects all orders for amounts greater than any for the customers in London.
select * from orders where amt > any (select amt from orders where cnum in (SELECT cnum FROM customers WHERE city = 'london'));

-- Extract all the orders of Motika.
Select onum from orders WHERE snum in (select snum from salespeople WHERE sname = 'Motika');

-- Find all the order attribute to salespeople servicing customers in London.
SELECT * FROM orders WHERE snum IN (SELECT snum FROM salespeople WHERE city = 'london');

-- Find names and numbers of all salesperson who have more than one customer. 
Select sname, snum from salespeople where snum in ( select snum from customers group by snum having count(snum) > 1 );

-- Find salespeople number,name and city who have multiple customers.
SELECT snum, sname, city FROM salespeople WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(snum) > 1);

-- Select customers who have a greater rating than any other customer in Rome.
Select * from customers where rating > ANY (select rating from customers where city = 'Rome');

-- Select all orders that had amounts that were greater that at least one of the orders from ‘1990-10-04’ .
SELECT * FROM orders WHERE amt > (SELECT MIN(amt) FROM orders WHERE odate = '1990-10-04')

-- Find all orders with amounts smaller than any amount for a customer in San Jose. 
SELECT onum, amt FROM orders WHERE amt < any (SELECT amt FROM orders, customers WHERE city = 'San Jose' AND orders.cnum = customers.cnum);

-- Select those customers whose rating are higher than every customer in Paris
Select * from customers where rating > any (select rating from customers where city = 'Paris');

