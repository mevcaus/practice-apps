DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE address (
    id INT NOT NULL AUTO_INCREMENT,
    lineOne VARCHAR(50),
    lineTwo VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(10),
    zipCode VARCHAR(10),
    phoneNumber VARCHAR(10),
    PRIMARY KEY(id)
);

CREATE TABLE payment (
    id INT NOT NULL AUTO_INCREMENT,
    ccNum VARCHAR(20),
    expDate VARCHAR(10),
    cvv VARCHAR(5),
    billingZip VARCHAR(10),
    PRIMARY KEY(id)
);

CREATE TABLE responses (
    req_session_id VARCHAR(100) NOT NULL,
    name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(15),
    address_id INT,
    payment_id INT,
    PRIMARY KEY(req_session_id),
    FOREIGN KEY (address_id) REFERENCES address (id),
    FOREIGN KEY (payment_id) REFERENCES payment (id)
);