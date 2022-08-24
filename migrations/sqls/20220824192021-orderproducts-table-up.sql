/* Replace with your SQL commands */

CREATE TABLE orderproducts (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    order_id INT FOREIGN KEY (order_id) REFERENCES orders (id),
    product_id INT FOREIGN KEY (product_id) REFERENCES products (id)
)

INSERT INTO orderproducts (quantity, order_id, product_id) VALUES (1, 1, 1);