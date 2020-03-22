var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var upload = require("express-fileupload");
var path = require("path");

app.use(bodyParser());
app.use(cors());
app.use(upload());
// app.use(path());

app.use(require("./config/router"));

app.listen(4000, ()=>{
  console.log("Get job Server is running");
});