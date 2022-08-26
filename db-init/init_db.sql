CREATE USER franciscofrias WITH PASSWORD 'admin';
CREATE DATABASE storefront;
CREATE DATABASE storefront_test;
GRANT ALL PRIVILEGES ON DATABASE storefront TO franciscofrias;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO franciscofrias;