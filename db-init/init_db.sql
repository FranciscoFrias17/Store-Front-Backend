SELECT 'CREATE DATABASE storefront'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'storefront')\gexec

SELECT 'CREATE DATABASE storefront_test'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'storefront_test')\gexec

SELECT 'CREATE USER franciscofrias WITH PASSWORD password123'
WHERE NOT EXISTS (SELECT FROM pg_user WHERE usename = 'franciscofrias')\gexec

GRANT ALL PRIVILEGES ON DATABASE storefront TO franciscofrias;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO franciscofrias;
