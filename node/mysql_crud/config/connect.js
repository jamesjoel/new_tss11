var mysql = require("mysql");

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "tss4"
});


module.exports = con;