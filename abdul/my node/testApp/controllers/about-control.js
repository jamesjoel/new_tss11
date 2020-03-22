var express = require("express");

var routes = express.Router();

routes.get("/", (req,res)=>{
  res.render("layout", {title : "About Page", pagename:"about/index"});
});


module.exports = routes;