-- lists all records
-- from the table

SELECT score, name
FROM second_table
WHERE rows(name) VALUE
ORDER BY score DESC;
