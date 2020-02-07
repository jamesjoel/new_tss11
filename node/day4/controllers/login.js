var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("layout", { title : "Login", pagename : "login/index" });
})

module.exports = routes;