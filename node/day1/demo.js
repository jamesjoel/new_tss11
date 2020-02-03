//  the express module is used for web freamework
var express = require("express");
// express() calling constroctur of express
var app = express();
// app.listen function create a server with 3000 port

app.listen(3000, function () {
    console.log("server running");
});