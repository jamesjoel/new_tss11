var express = require("express");
var routes = express.Router();
var Register = require("../models/signup_m");
var sha1 = require("sha1");

routes.post("/", (req,res)=>{
  req.body.password = sha1(req.body.password);

  Register.insertData(req.body, (err,result)=>{
    res.send(result.ops[0]);
  });
});

module.exports = routes;

