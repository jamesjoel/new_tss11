var express = require("express");
var routes = express.Router();
var mongodb = require('mongodb');
var AllData = require("../models/signup_m");

routes.get("/", (req,res)=>{
  var obj = req.userData;
  AllData.getData({ _id : mongodb.ObjectId(obj.id)}, (err,result)=>{
    res.send(result[0]);
  });
});

routes.post("/update", (req,res)=>{

  console.log(req.files); 
    
})

module.exports = routes;