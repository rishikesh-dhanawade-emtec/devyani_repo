USE sales_db;

-- Create an index that will enable a user to pull orders for ‘1990-10-03’ out of the Orders table
-- quickly.
CREATE INDEX ORDER_INDEX ON orders(odate);

-- If the Orders table has already been created, how can you force the onum field to be unique
-- (assume all current values are unique)?
ALTER TABLE orders ADD CONSTRAINT unique_onum UNIQUE(onum);

-- Create an index that would permit salesperson to retrieve his orders.
CREATE INDEX orders_snum ON orders(snum);

-- Let us assume that each salesperson is to have only one customer of a given rating, and that this is
-- currently the case. Create an index that enforces it.
CREATE INDEX customer_index ON customers(cnum, rating);

-- Create an index to speed up searching order on a given date by given customer
CREATE INDEX new_index ON orders(odate, cnum);