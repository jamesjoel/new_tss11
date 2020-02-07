var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("layout", { title: "Contact", pagename: "contact/index" });
})

module.exports = routes;