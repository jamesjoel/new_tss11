var express = require("express");
var routes = express.Router();
var mongodb = require('mongodb');
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", (req, res) => {
    var objid = mongodb.ObjectId(req.session._id);
    User.find({ _id : objid}, (err, result)=>{

        res.render("layout", { title: "Profile", pagename: "profile/index", result : result[0] });
    })
});


routes.get("/edit", (req, res) => {
    var objid = mongodb.ObjectId(req.session._id);
    User.find({ _id: objid }, (err, result) => {
        
        res.render("layout", { title: "Edit Profile", pagename: "profile/edit", result: result[0] });
    })
});

routes.post("/edit", (req, res)=>{
    var objid = mongodb.ObjectId(req.session._id);
    User.update({ _id : objid }, req.body, (err, result)=>{
        res.redirect("/profile");
    })
})


routes.get("/changepassword", (req, res)=>{
    res.render("layout", { title: "Edit Password", pagename: "profile/changepass", message1 : req.flash("msg1"), message2 : req.flash("msg2") });
})

routes.post("/changepassword", (req, res) => {
    var objid = mongodb.ObjectId(req.session._id);
    var a = req.body.cur_pass;
    var b = req.body.new_pass;
    var c = req.body.conf_new_pass;
    User.find({ _id : objid }, (err, result)=>{
        if (result[0].password == sha1(a))
        {
            if(b == c)
            {
                User.update({ _id : objid }, { password : sha1(b) }, (err, result)=>{
                    res.redirect("/profile");
                });
            }
            else{
                req.flash("msg2", "Your New Password and Confirm Password is not matced");
                res.redirect("/profile/changepassword");
            }
        }
        else{
            req.flash("msg1", "Your Currect Password is Incorrect");
            res.redirect("/profile/changepassword");
        }
    })
})



routes.get("/changeimage", (req, res)=>{
    res.render("layout", { title: "Change Image", pagename: "profile/changeimage" });

});

routes.post("/changeimage", (req, res)=>{
    console.log(req.files);
})


module.exports = routes;