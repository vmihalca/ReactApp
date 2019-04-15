DROP DATABASE IF EXISTS achiveDB;

CREATE DATABASE achiveDB;

DROP TABLE IF EXISTS account;

CREATE TABLE IF NOT EXISTS account(
    userid serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    useremail VARCHAR(255) UNIQUE NOT NULL,
    created_on TIMESTAMP,
    last_login TIMESTAMP
    );

INSERT INTO account (username, useremail) VALUES('cypher', 'cypher@gmail.com');
