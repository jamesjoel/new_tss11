var express = require("express");
var routes = express.Router();

routes.get("/", (req,res)=>{
  result = [
    {
    name : "restaurent",
    img_url : "/imgs/sale2.jpg"
    },
    {
      name : "shop online",
      img_url : "/imgs/sale1.jpg"
    },
    {
      name : "movies",
      img_url : "/imgs/sale1.jpg"
    },
    {
      name : "doctors",
      img_url : "/imgs/sale2.jpg"
    }
]
  res.render("layout", {title : "Home Page", pagename: "home/index", result : result });
});

module.exports = routes;