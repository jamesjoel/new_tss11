var express = require("express");
var routes = express.Router();
var Teacher = require('../models/teacher');
var mongodb = require("mongodb");


routes.get("/", (req, res)=>{
    Teacher.find({},function(err, result){
        
       res.render("layout", { title: "Teacher", pagename: "teacher/index", result : result });
      });
});
routes.get("/edit/:id", (req, res)=>{
   var objid = mongodb.ObjectId(req.params.id);
   Teacher.find({ _id : objid }, function(err, result){
      console.log(result);
      res.render("layout", { title: "Teacher", pagename: "teacher/edit", result : result[0]});
   })

});

routes.post("/update", (req, res)=>{
   console.log(req.body);
})





routes.get("/delete/:id", (req, res) => {
   // console.log(req.params);
   var id = req.params.id;
   objid = mongodb.ObjectId(id);
   Teacher.delete({ _id: objid }, function (err, result) {
      res.redirect("/teacher");
   });
});




routes.post("/", (req, res)=>{
   Teacher.save(req.body, (err, result)=>{
        res.redirect("/teacher");
   });
});




module.exports = routes;