var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("layout", { title: "About", pagename: "about/index" });
});

routes.get("/info", (req, res)=>{
    res.render("layout", { title: "About", pagename: "about/info" });
});
module.exports = routes;