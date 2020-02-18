var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.use(bodyParser());

app.use(require("./config/routes"));

app.listen(3000, ()=>{
  console.log("testApp server is running");
})

