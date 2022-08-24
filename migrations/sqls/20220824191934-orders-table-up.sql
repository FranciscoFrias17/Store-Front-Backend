/* Replace with your SQL commands */

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    user_id INT FOREIGN KEY (user_id) REFERENCES users (id)
)

INSERT INTO orders (status, user_id) VALUES ('complete', 1);