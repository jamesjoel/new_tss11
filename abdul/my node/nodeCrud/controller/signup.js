var express = require("express");
var routes = express.Router();

routes.get("/", (req,res)=>{
  res.render("layout",{title : "Signup Page", pagename:"signup/index"});
})