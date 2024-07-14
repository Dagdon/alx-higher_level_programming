-- displays the top three cities temprature in july

USE hbtn_0c_0;

SELECT city, AVG(value) AS avg_temp
FROM temperatures
HERE month = 7 OR month = 8
GROUP BY city
ORDER BY avg_temp DESC;
LIMIT 3;
