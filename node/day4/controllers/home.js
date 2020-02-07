var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("layout", { title: "Home", pagename: "home/index" });
})

module.exports = routes;