var express = require("express");

var routes = express.Router();

var User = require("../models/home_model");

var mongoDb = require("mongodb");


routes.get("/", (req,res)=>{
  User.find({}, function(err,result){
    if(err){
      console.log("somthing went wrong", err);
      return;
    }

    res.render("layout", {title:"Home Page", pagename:"home/index", data : result});
  })
  
});

routes.get("/edit:id", (req,res)=>{
  var objId = mongoDb.ObjectID(req.params.id);
  // console.log(objId);
  console.log(req.params.id);

  User.update()
});


routes.get("/delete/:id", (req,res)=>{
  var objId = mongoDb.ObjectID(req.params.id);
  // console.log(req.params.id);
  User.delete({ _id : objId}, function(err,result){
    res.redirect("/");
  });
});




module.exports = routes;