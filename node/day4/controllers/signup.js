var express = require("express");
var routes = express.Router();
var User = require("../models/user");

routes.get("/", (req, res) => {
    res.render("layout", { title: "Signup", pagename: "signup/index" });
});


routes.post("/", (req, res)=>{
    User.save(req.body, (err, result)=>{
        res.redirect("/login");
    });
});


module.exports = routes;