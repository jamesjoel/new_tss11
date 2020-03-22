var express = require("express");
var routes = express.Router();
var mongodb = require('mongodb');
var AllData = require("../models/signup_m");
var path = require("path");
// var random = require("randomstring"); // this is randomstring module for generate random strings of img name


routes.post("/update", (req,res)=>{
  var obj = req.userData;
  console.log("backdoor id :",obj.id)

  var imageData = req.files.image;
  var userInfo = JSON.parse(req.body.info); //Here info is key of userInfo, it was given in angular.
  console.log("user id :",userInfo._id)
  var imgArr = imageData.name.split("."); // for separate image with each ( . ) and push into array
  var ext = imgArr[imgArr.length-1]; // Here we are getting the last value of array ex: png/jpg/gif/jpeg.
  var uploadpath = path.resolve()+"/public/assets/"+imageData.name;
  var imgName = imageData.name;
  
  authModel.getData({_id : mongodb.ObjectID(obj.id)}, (err,result)=>{
    console.log("find query----------=============",result[0]);
    if(result[0].image){
      var oldImage = result[0].image;
      fs.unlinkSync(path.resolve()+"/public/assets/"+oldImage);
    }
  })


  // imageData.mv(uploadpath, err=>{
  //   if(err){
  //     console.log("unable to move file in folder", err);
  //     return;
  //   }
  //   AllData.updateData({_id : mongodb.ObjectID(obj.id)}, { image : imgName }, (err,result)=>{
  //     if(err){
  //       console.log("unable to upload image in server", err);
  //       return;
  //     }
  //     res.send({
  //       uploadpath : "http://localhost:3000/assets/"+imgName
  //     });
  //   });
  // });

  });
  
module.exports = routes;