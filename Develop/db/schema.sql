-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLE category (
-- id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- category_name VARCHAR(50) NOT NULL,
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE product (
-- id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- product_name VARCHAR(50) NOT NULL,
-- price DECIMAL NOT NULL,
-- -- VALIDAR SE O DECIMAL É VÁLIDO
-- stock INTEGER(10) NOT NULL,
-- -- VALIDAR SE VALOR É NUMÉRICO
-- category_id INTEGER,
-- PRIMARY KEY (id),
-- FOREIGN KEY (category_id) REFERENCES category(id)
-- );

-- CREATE TABLE tag (
-- id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- tag_name VARCHAR(50),
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE productTag (
-- id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- product_id INTEGER,
-- tag_id INTEGER,
-- PRIMARY KEY (id),
-- foreign key (product_id) REFERENCES product(id),
-- foreign key (tag_id) REFERENCES tag(id)
-- );

-- INSERT INTO tag (tag_name)
-- VALUES ("Basketball");