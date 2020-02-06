var express2 = require("express");

var app1 = express2();

app1.get("/my", function(req,res){
  res.sendFile(__dirname+"./my.html")
})

app1.listen(4000, function(req,res){
  console.log("second server started");
})