var express = require("express");
var path = require('path');

var app = express();

crtPath = app.path();

app.set("view engine" ,"ejs");

app.use(express.static(__dirname+"/assets"));

app.get("/", (req,res)=>{
  var b = 23;
  res.render("home", { name : b});
})

app.get("/about", (req,res)=>{
  var b = "ishan";
  res.render("about", { name : b});
})

app.listen(3000, ()=>{
  console.log("template server is running");
})