-- create 'student_db' database
-- CREATE DATABASE student_db;

--USE student_db;

-- create following tables in database with proper data types
-- student: id (PK), name, address, phone, email, age, schoolId (FK)
-- CREATE TABLE student (
--        id INT PRIMARY KEY IDENTITY(1,1),
--        name VARCHAR(20),
--        address VARCHAR(30),
--        phone BIGINT,
--        email VARCHAR(30),
--        age INT,
--        schoolId INT FOREIGN KEY REFERENCES school(id)
-- )

-- school: id (PK), name, address, principal, phone
-- CREATE TABLE school (
--     id INTEGER PRIMARY KEY,
--      name VARCHAR(20),
--      address VARCHAR(20),
--      principal VARCHAR(20),
--      phone VARCHAR(10)
-- )

-- create relationship as shown in the table schema

-- add some dummy data
-- adding values into student table
-- INSERT INTO student (name, address, phone, email,age,schoolId) VALUES ('Jack','Pune',123456921,'john@gmail.com',25,141)
-- INSERT INTO student (name, address, phone, email,age, schoolId) VALUES ('Marry','Hyderabad',123456921,'marry@gmail.com',22,142)
-- INSERT INTO student (name, address, phone, email,age, schoolId) VALUES ('Leo','Chennai',56798789,'leo@gmail.com',30,143)

--TRUNCATE TABLE student
--adding values into school table
-- INSERT INTO school (id,name,address, principal,phone) VALUES (141,'ABC','Chennai', 'John',15698475)
-- INSERT INTO school (id,name,address, principal,phone) VALUES (142,'PQR','Mumbai', 'Sam',4156751)
-- INSERT INTO school (id,name,address, principal,phone) VALUES (143,'XYZ','Bangalore', 'Sandy',23164984)

-- SELECT * FROM student
-- SELECT * FROM school