var express = require("express");
var routes = express.Router();
var User = require("../model/home_model");
var mongodb = require("mongodb");

routes.get("/", (req,res)=>{

  User.find({},function(err,result){
    res.render("layout", {title : "Home Page", pagename : "home/index", userData : result});
  });
});

routes.get("/edit/:id", (req,res)=>{
  var userId = mongodb.ObjectID(req.params.id);
  User.find({_id : userId}, function(err,result){
    // console.log(result);
    res.render("layout", {title : "Edit Page", pagename : "home/edit", singlData : result[0]})
  });
});

routes.post("/update", (req,res)=>{
  myId = mongodb.ObjectID(req.body.id);
  // delete req.body.id;

  User.update({_id:myId}, req.body,(err,result)=>{
    res.redirect("/");
  })

})

module.exports = routes;