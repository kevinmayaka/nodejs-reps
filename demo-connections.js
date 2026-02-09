// let mysql = require('mysql2');

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0808"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// create db
// let mysql = require('mysql2');
// let con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '0808'
// });
// con.connect(function(err){
//     if(err) throw err;
//     console.log('connected');
//     con.query('CREATE DATABASE mydb', function (err, result){
//         if (err) throw err;
//         console.log('Database created');
//     });
// });

// CREATE TABLE
// let mysql = require('mysql2');
// let con = mysql.createConnection({
//     host : 'localhost',
//     user: 'root',
//     password: '0808',
//     database: 'mydb'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "ALTER TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// INSERT INTO
// let mysql = require('mysql2');

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0808",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "INSERT INTO customers (name, address) VALUES ?";
//     let values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// SELECT FROM 
let sql = require('mysql2');
const { error } = require('node:console');
let con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0808',
  database: 'mydb'
});

con.connect(function(err){
  if (err) throw error;
  console.log('connection successful');
  con.query("SELECT name, address FROM CUSTOMERS", function(err, result, fields){
    if (err) throw error;
    console.log(result)
  });
});