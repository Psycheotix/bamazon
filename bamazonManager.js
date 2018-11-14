
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "GrassIsGreener29!",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    // console.log("connected as id" + connection.threadId);
        
    // console.log(inquirer)
    managerPortal();
});

// LIST A SET OF MENU OPTIONS
function managerPortal(){

    inquirer
    .prompt([
{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
        "View products for sale",
        "View low inventory",
        "Add to Inventory",
        "Add New Product"
    ]//choices END
},
])//prompt END

.then(answers => {
    console.log(answers)
    switch (answers.action) {
    case "View products for sale":
      printProducts();
      break;

    case "View low inventory":
      lowInventory();
      break;

    case "Add to Inventory":
      addInventory();
      break;

    case "Add New Product":
      addProduct();
      break;
    }
  });
  
} //menuOptions END



// FUNCTION View Products for Sale
    // the app should list every available item: the item IDs, names, prices, and quantities.
function printProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, data) {
      if (err) throw err;
      // Log all data of the SELECT statement
      
    console.table(data);


    console.log("_____________________________________________________\n")
    console.log("***   MANAGER PORTAL   ***")
    console.log("_____________________________________________________")
    console.log("\n")
    
    managerPortal()
    });

    
  }
        
// FUNCTION  View Low Inventory
        //then it should list all items with an inventory count lower than five
function lowInventory (){
    connection.query("SELECT stock_quantity FROM products GROUP BY product_name HAVING count(*) < 5", function (arr, response){
        for (let i =0; i< response.length; i++){
            console.log(response[i].product_name)
        }
    })
    
}


// FUNCTION Add to Inventory
        //your app should display a prompt that will let the manager "add more" of any item currently in the store.

// FUNCTION Add New Product
        //it should allow the manager to add a completely new product to the store.