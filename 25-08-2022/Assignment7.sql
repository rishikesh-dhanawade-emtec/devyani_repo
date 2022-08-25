
USE sales_db;
-- Write a query that lists each order number followed by the name of the customer who made the order.
SELECT orders.onum, customers.cname FROM orders INNER JOIN customers ON orders.cnum = customers.cnum;
SELECT orders.onum, customers.cname FROM orders, customers WHERE orders.cnum = customers.cnum;

-- Write a query that gives the names of both the salesperson and the customer for each order along with the order number.
SELECT onum, cname, sname FROM ((customers INNER JOIN orders ON orders.cnum = customers.cnum) INNER JOIN salespeople ON customers.snum = salespeople.snum);

-- Write a query that produces all customers serviced by salespeople with a commission above 12%.
-- Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission.
SELECT cname, sname, comm FROM customers c INNER JOIN salespeople s ON c.snum = s.snum WHERE s.comm > 0.12 ORDER BY cname;

-- Write a query that calculates the amount of the salesperson’s commission on each order by a
-- customer with a rating above 100.
SELECT cname, SUM(comm) AS 'Total Amount of commission' FROM customers INNER JOIN salespeople ON customers.snum = salespeople.snum WHERE rating > 100 GROUP BY cname;

-- Write a query that produces all pairs of salespeople who are living in the same city.
-- Exclude combinations of salespeople with themselves as well as duplicate rows with the order reversed
SELECT * FROM salespeople;
SELECT s1.sname, s1.city FROM salespeople s1, salespeople s2 WHERE s1.city= s2.city AND s1.sname != s2.sname;

