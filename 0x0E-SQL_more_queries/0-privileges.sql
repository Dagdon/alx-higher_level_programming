-- list all privileges of a user
-- in an SQL server

SELECT User, Host, Privilege_Type
FROM information_schema.user_privileges
WHERE User IN ('user_0d_1' 'user_0d_2')
AND Host = 'localhost'
ORDER BY User, Privilege_Type;
