var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/assets"));

app.use(require('./config/routes'));


app.listen(3000, ()=>{
  console.log("just dial server is running");
});
