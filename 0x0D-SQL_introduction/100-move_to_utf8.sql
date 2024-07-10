-- change database names

ALTER DATABASE hbtn_0c_0
CHARACTER SET utf8mb4
COLATE utf8mb4_unicode_ci;

ALTER TABLE first_table
CONVERT CHARACTER SET utf8mb4
COLATE utf8mb4_unicode_ci;

ALTER TABLE first_table
MODIFY name VARCHAR(256)
CHARACTER SET utf8mb4
COLATE utf8mb4_unicode_ci;
