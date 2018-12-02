require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.DBUSERNAME,
  password: process.env.PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
