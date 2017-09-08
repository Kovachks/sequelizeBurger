DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id integer(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(256) NOT NULL,
    devoured BOOLEAN default 0,
    date TIMESTAMP,
    PRIMARY KEY(id)
);