# Storefront Backend

## Description

This is a backend API for a store. The database is a Postgres database. After the postgres database is setup the user can store orders and products to their respective database user.

## Instructions

1. Install all dependencies with `npm install`
2. Start Docker with `docker-compose up`
3. Create a user and the databases via psql commands and grant privileges:

```
SELECT 'CREATE DATABASE storefront'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'storefront')\gexec

SELECT 'CREATE DATABASE storefront_test'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'storefront_test')\gexec

SELECT 'CREATE USER admin WITH PASSWORD password123'
WHERE NOT EXISTS (SELECT FROM pg_user WHERE usename = 'admin')\gexec

GRANT ALL PRIVILEGES ON DATABASE storefront TO admin;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO admin;
```

4. Run the migrations with `db-migrate up`
5. Run the tests with Jest with `npm run test`
6. Start the server with `npm start`

### Environment Variables

As it is not in good practice to store passwords in the code, I use environment variables. You can set them in a `.env` file in the root directory. The following variables are required:

```
POSTGRES_URL = localhost
POSTGRES_PORT = 5432
POSTGRES_DB = storefront
POSTGRES_TEST_DB = storefront_test
POSTGRES_USER = admin
POSTGRES_PASSWORD = password123
NODE_ENV = dev
EXPRESS_PORT = 3000
BCRYPT_PASSWORD = coding-is-awesome
SALT_ROUNDS = 10
TOKEN_SECRET = someencryptedstring
```
