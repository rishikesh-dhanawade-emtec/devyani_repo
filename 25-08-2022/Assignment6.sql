
USE sales_db;
-- Write a query that counts the number of salespeople registering orders for each day. 
--(If a salesperson has more than one order on a given day, he or she should be counted only once.)
SELECT odate,COUNT(distinct snum) AS total FROM orders GROUP BY odate;
-- distinct - it will return different values from table 

-- Write a query on the Customers table that will find the highest rating in each city. Put the output in
-- this form: For the city (city), the highest rating is : (rating).
SELECT city, MAX(rating) AS 'highest rating is :' FROM customers GROUP BY city;

-- Write a query that totals the orders for each day and places the results in descending order.
SELECT COUNT(onum) AS 'Total Orders', odate FROM orders GROUP BY odate ORDER BY COUNT(onum) DESC;

-- Write a query that selects the total amount in orders for each salesperson for whom 
-- this total is greater than the amount of the largest order in the table.
SELECT snum, SUM(amt) AS 'Total Amount' FROM orders GROUP BY snum HAVING SUM(amt) > MAX(amt);
 
-- Write a query that selects the highest rating in each city.
SELECT city, MAX(rating) AS 'highest rating' FROM customers GROUP BY city;

-- Largest order taken by each salesperson with order value more than Rs.3000. 
SELECT o.odate, o.snum, MAX(amt) AS 'Largest Order' FROM orders o WHERE o.amt > 3000 GROUP BY odate,snum;

-- Select each customer smallest order
SELECT cnum, MIN(amt) AS 'Smallest Order' FROM orders GROUP BY cnum;

