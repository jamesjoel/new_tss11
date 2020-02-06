var express = require("express");

var app = express();

app.get('/', function(req, res){
  // res.send("<h1>HI, send function is use to send data only</h1>")
  res.sendFile(__dirname+"/home.html");
});

app.get('/about', function(req, res){
  // res.send("<h1>HI, send function is use to send data only</h1>")
  res.sendFile(__dirname+"/about.html");
});

app.get('/contact', function(req, res){
  // res.send("<h1>HI, send function is use to send data only</h1>")
  res.sendFile(__dirname+"/contact.html");
});

app.listen(3000, function(){
  console.log("Server started");
})