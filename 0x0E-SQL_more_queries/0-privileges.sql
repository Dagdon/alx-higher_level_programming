-- list all privileges of a user
-- in an SQL server

SELECT user, host, privilege_type
FROM information_schema.user_privileges
WHERE user IN ('user_0d_1', 'user_0d_2')
AND Host = 'localhost'
ORDER BY user, privilege_type;
