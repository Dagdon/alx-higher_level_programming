-- prints full description of table

USE hbtn_0c_0;

CREATE TABLE 'first table'
SELECT TABLE_NAME, TABLE_SCHEMA, CREATE_TABLE
FROM information_schema.TABLES
WHERE TABLE_NAME = 'first_table';
