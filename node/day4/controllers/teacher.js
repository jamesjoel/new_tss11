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
   // console.log(req.body);
   var objid = mongodb.ObjectId(req.body.id);
   delete req.body.id;
   // when we update data do not send id to mongodb 
   Teacher.update({ _id : objid }, req.body, (err, result)=>{
      res.redirect("/teacher");
   })
})


/*

Teacher.update({city : "indore"}, { salary : 10000})
*/






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