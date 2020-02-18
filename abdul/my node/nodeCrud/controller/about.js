var express = require("express");
var routes = express.Router();
var User = require("../model/home_model");
var mongodb = require("mongodb");

routes.get("/", (req,res)=>{
    res.render("layout", {title : "About Page", pagename : "about/index"});
  
});