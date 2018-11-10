var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    //insert callback to run code that will display all of the items availible for
    //sale, include the ids, names and prices of products for sale
});

function showItems() {
    console.log()
}