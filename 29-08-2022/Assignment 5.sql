USE hr_db;

-- Display first name and last name after converting the first letter of each name to upper case and the rest to lower case
SELECT UPPER(SUBSTRING(FIRST_NAME, 1, 1)) +
LOWER(SUBSTRING(FIRST_NAME, 2, LEN(FIRST_NAME)-1))  AS 'FIRST_NAME', 
UPPER(SUBSTRING(LAST_NAME, 1, 1)) +
LOWER(SUBSTRING(LAST_NAME, 2, LEN(LAST_NAME)-1)) AS 'LAST_NAME'
FROM employees;

--Display the first word in job title.
SELECT SUBSTRING(JOB_TITLE, 1, 1) AS 'FIRST_WORD' FROM jobs;

--Display the length of first name for employees where last name contain character ‘b’ after 3rd position.
SELECT LEN(FIRST_NAME) AS 'LENGTH' FROM employees WHERE CHARINDEX('b', LAST_NAME) > 3;

--Display first name in upper case and email address in lower case for employees where the first name and email address are same irrespective of the case.
SELECT UPPER(FIRST_NAME), LOWER(EMAIL) FROM employees WHERE LOWER(FIRST_NAME) = LOWER(EMAIL);

-- Display first name, salary, and round the salary to thousands.
SELECT FIRST_NAME, SALARY, ROUND(SALARY, -3) FROM employees;

--Display employee ID and the date on which he ended his previous job.
SELECT EMPLOYEE_ID, MAX(END_DATE) AS 'DATE' FROM job_history GROUP BY EMPLOYEE_ID;

-- Display first name and date of first salary of the employees.
SELECT MIN(j.START_DATE) as SALARY_DATE, e.FIRST_NAME FROM job_history j LEFT OUTER JOIN employees e on j.EMPLOYEE_ID = e.EMPLOYEE_ID group by e.FIRST_NAME;
SELECT FIRST_NAME ,DATEADD(month, 01, HIRE_DATE) AS 'FIRST SALARY DATE' FROM employees;

-- Display first name and experience of the employees.
SELECT FIRST_NAME, DATEDIFF(day, HIRE_DATE, GETDATE()) / 365 AS 'Experience' FROM employees;

-- Display first name of employees who joined in 2001.
SELECT FIRST_NAME, HIRE_DATE FROM employees WHERE DATEPART(YY, HIRE_DATE) = ('2001'); 
 
-- Display employees who joined in the current year.
SELECT * FROM employees WHERE DATEPART(YY, HIRE_DATE) = DATEPART(YY,GETDATE());

-- Display the number of days between system date and 1st January 2011.
SELECT DATEDIFF(year, GETDATE(), '1-Jan-2011') AS DateDiff;

-- Display number of employees joined after 15th of the month.
SELECT * FROM EMPLOYEES WHERE DATEPART(DAY FROM HIRE_DATE) > 15;

-- Display third highest salary of employees
SELECT DISTINCT TOP 1 SALARY FROM (SELECT DISTINCT TOP 3 SALARY FROM employees ORDER BY SALARY DESC)result;

