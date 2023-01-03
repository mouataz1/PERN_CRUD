CREATE DATABASE crud_api;

CREATE Table item(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image VARCHAR (255)
);