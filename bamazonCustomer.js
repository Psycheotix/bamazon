var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "GrassIsGreener29!",
    database: "bamazon",

});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId);

    printProducts(); //RUN FUNCTION DISPLAY TABLE
    
});


//FUNCTION READ THE TABLE FROM BAMAZON
function printProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, data) {
      if (err) throw err;
      // Log all data of the SELECT statement
      
      console.table(data);
      console.log("________________________________________________________________________________________________________________________\n")

      customerPortal();
    });
  }

//FUNCTION ASK CUSTOMER WHAT PRODUCT THEY WOULD LIKE TO PURCHASE
  function customerPortal(){
    ///PROMPT USER WITH QUESTION TO PURCHASE PRODUCT
    // console.log("In customer portal");
    inquirer
    .prompt([
        {
            type: "input",
            message: "Choose product ID to purchase",
            name: "orderId"
        },
        {
            type: "input",
            message: "How many would you like to purchase?",
            name: "orderQuantity"
        }
    ])
    .then(answers => {
        console.log(answers);
        placeOrder(answers);
    }); 
  }


  function placeOrder(info) {
      connection.query("SELECT * FROM products WHERE id = " + info.orderId, function(err, response){
        if (err) throw err;    
        // console.log(response);
            // console.log(info.orderQuantity);
            // console.log(response[0].stock_quantity);

            if( parseInt(info.orderQuantity) <=   parseInt(response[0].stock_quantity) ) {
               
              var newQuantity = response[0].stock_quantity - info.orderQuantity ;
                connection.query("UPDATE products SET stock_quantity =" + newQuantity + " WHERE id = " + info.orderId, function(){
                    // console.log(newQuantity);
                    console.log("Order Successful! Your item will be ready for shipping within 42hrs.");
                    console.log("Your order's total is:" + " " + "$" + response[0].price * info.orderQuantity);
                    // console.log(info.orderId)

                    console.log("________________________________________________________________________________________________________________________\n")
                    printProducts(); //RUN FUNCTION DISPLAY TABLE
                })

            } else {
                console.log("Not enough quantity to place your order");
            }
      });
      
  }


 

