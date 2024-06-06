-- prints full description of table

SELECT TABLE_NAME, TABLE_SCHEMA, CREATE_TABLE
FROM information_schema.TABLES
WHERE TABLE_NAME = 'first_table';
