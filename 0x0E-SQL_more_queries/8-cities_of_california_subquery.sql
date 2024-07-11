-- list all cities of california
-- in the database

SELECT cities.id, cities.name
FROM cities, states
WHERE cities.states_id = states.id
AND staes.name = 'California'
ORDER BY cities.id ASC;
