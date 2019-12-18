CREATE DATABASE hackathon;

USE hackathon;

CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    path VARCHAR(200)
);

CREATE TABLE charInfo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(50),
    firstname VARCHAR(50)
);