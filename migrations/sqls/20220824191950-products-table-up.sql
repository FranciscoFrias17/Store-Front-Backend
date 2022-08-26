/* Replace with your SQL commands */

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price integer NOT NULL,
);

INSERT INTO products (name, price) VALUES ('Seagrams', 100);