DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
-- item_id (unique id for each product)
id INT NOT NULL AUTO_INCREMENT,
-- product_name (Name of product)
product_name VARCHAR(100) NULL,
-- department_name
department_name VARCHAR(100) NULL,
-- price (cost to customer)
price Decimal (10,2) NULL,
-- stock_quantity (how much of the product is available in stores)
stock_quantity INT NULL,

PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig K-Compact Single-Serve", "Kitchen", 49.96, 38 ), ("Hamilton Beach 7 Quart Stay or Go Programmable Slow Cooker", "Kitchen", 39.88, 12), ("Ninja Professional Blender", "Kitchen", 59.00, 7), ("Better Homes and Gardens Thick and Plush Solid Bath Collection", "Bath", 7.72, 20), ("Premium 10-Gauge Shower Curtain","Bath", 9.32, 12), ("Bathroom Vanity Apothecary Jar", "Bath", 7.97, 45), ("8 Piece Garden Tote and Tool Set", "Garden", 12.04, 25),("Easy Grow Resin Elevated Garden, All Weather, Self-Watering Plastic Planter", "Garden", 117.99 , 4), ("Adams 36inch Deluxe Garden Planter", "Garden", 32.99, 8), ("Electric Acoustic Guitar With Guitar Case, Strap, Tuner", "Musical Instruments", 49.99, 5);
