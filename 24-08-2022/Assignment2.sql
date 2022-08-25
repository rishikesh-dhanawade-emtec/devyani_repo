--create 'product_db' databse
--CREATE DATABASE product_db

--USE product_db

-- create following tables
-- categories: id (PK), title, description
-- products: id (PK), title, price, description, category (FK), company
-- orders: id (PK), total, date
-- order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount

CREATE TABLE categories 
(
      id INT PRIMARY KEY IDENTITY(1,1),
      title VARCHAR(20),
     description VARCHAR(30)
)

CREATE TABLE orders 
(
       id INT PRIMARY KEY IDENTITY(1,1),
       total INT,
       date date
)

CREATE TABLE products 
(
    id INT PRIMARY KEY IDENTITY(1,1),
    title VARCHAR(20),
    price INT,
    description VARCHAR(30),
    categoryId INT FOREIGN KEY REFERENCES categories,
    company VARCHAR(20)
)

CREATE TABLE orders_details 
(
      id INT PRIMARY KEY IDENTITY(1,1),
      orderId INT FOREIGN KEY REFERENCES orders,
      productId INT FOREIGN KEY REFERENCES products,
      quantity INT,
      price INT,
      totalPrice INT,
      discount INT
)

-- create relationship as shown in the table schema

-- add some dummy data
-- categories table
INSERT INTO categories (title, description) VALUES ('Mobile','Portable Electronic Device');
INSERT INTO categories (title, description) VALUES ('Laptop','Portable Microcomputer');

SELECT id,title,description FROM categories;

--orders
INSERT INTO orders (total,date) VALUES (50000,'2022-04-10');
INSERT INTO orders (total,date) VALUES (50000,'2022-08-08');

SELECT id,total,date FROM orders;

-- -- products table
INSERT INTO products (title, price, description, categoryId,company) VALUES ('Mobile', 25000, 'Portable Electronic Device',1,'Apple');
INSERT INTO products (title, price, description, categoryId,company) VALUES ('Laptop', 50000, 'Portable Microcomputer', 2,'Dell');

SELECT * FROM products
-- -- order_details
INSERT INTO orders_details (orderId, productId,quantity,price,totalPrice,discount) VALUES (1, 1, 2, 25000, 50000, 0), (2, 2, 1, 50000, 50000, 0);

SELECT * FROM categories
SELECT * FROM products
SELECT * FROM orders
SELECT * FROM orders_details

