var express = require("express");

var app = express();

aap.get(function(req, res){
  res.send("hello world");
});

app.listen(3000, function(){
  console.log("Server is Running")
})