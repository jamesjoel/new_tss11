var express = require("express");
var routes = express.Router();
var User = require("../models/user");

var sha1 = require("sha1");

routes.get("/", (req, res)=>{
    res.render("layout", { title : "Login", pagename : "login/index", message : req.flash("msg") });
})

routes.post("/", (req, res)=>{
    User.find({ email : req.body.email }, (err, result)=>{
        if(result.length > 0)
        {
            if(result[0].password == sha1(req.body.password))
            {
                req.session._id = result[0]._id;
                req.session.name = result[0].name;
                req.session.isLoggedIn = true;
                res.redirect("/dashboard");
            }
            else{
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("msg", "This Username and Password is Incorrect");
            res.redirect("/login");
        }
    })
})

module.exports = routes;