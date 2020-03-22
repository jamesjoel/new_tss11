var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

var User = require("../models/signin_m");

routes.post("/", (req,res)=>{
 User.getData({ email : req.body.email }, (err,result)=>{
   if(err){
     console.log(err);
     return;
   }
   if(result.length > 0){
     if(result[0].password == sha1(req.body.password)){
       var obj = { id: result[0]._id, email : result[0].email };

       var Logtoken = jwt.sign(obj, "this is login secret", { expiresIn : 3600 });
       res.status(200).send({
         success : true,
         Logtoken
       })
     } else{
       res.status(401).send({
         success : false,
         status : 2  // for password incorrect
       });
     }
   }else{
     res.status(401).send({
       success : false,
       status : 1  // for email invalid.
     });
   }
 });
});

module.exports = routes;
