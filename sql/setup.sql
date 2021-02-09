DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    "First Name" VARCHAR NOT NULL CHECK ("First Name" != ''),
    "Last Name" VARCHAR NOT NULL CHECK ("Last Name" != ''),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);