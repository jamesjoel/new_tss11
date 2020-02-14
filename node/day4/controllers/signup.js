var express = require("express");
var routes = express.Router();
var User = require("../models/user");

var sha1 = require("sha1");

routes.get("/", (req, res) => {
    res.render("layout", { title: "Signup", pagename: "signup/index" });
});


routes.post("/", (req, res)=>{

    req.body.password = sha1(req.body.password);

    User.save(req.body, (err, result)=>{
        res.redirect("/login");
    });
});


module.exports = routes;