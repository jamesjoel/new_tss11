var express = require("express");
var routes = express.Router();
var Teacher = require('../models/teacher');



routes.get("/", (req, res)=>{
    Teacher.find(function(err, result){
       res.render("layout", { title: "Teacher", pagename: "teacher/index", result : result });
    });
});


routes.post("/save", (req, res)=>{
   Teacher.save(req.body, (err, result)=>{
        res.redirect("/teacher");
   });
});




module.exports = routes;