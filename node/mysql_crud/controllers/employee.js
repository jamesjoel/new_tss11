var express = require("express");
var routes = express.Router();
var Employee = require('../models/employee');




routes.get("/", (req, res)=>{

  Employee.selectAll((err, result)=>{
    result = JSON.parse(JSON.stringify(result));
    res.render("layout", { title: "Employee", pagename: "employee/index", result : result, singleEmp : ""});
    
    
  });


});



routes.post("/edit/:id", (req, res)=>{
  var id = req.params.id;
  Employee.updateById(id, req.body, (err, result)=>{
    res.redirect("/employee");
  });
});



routes.get("/edit/:id", (req, res) => {
  var id = req.params.id;
  Employee.selectAll((err, result1) => {
    result1 = JSON.parse(JSON.stringify(result1));
    Employee.selectById(id, (err, result2)=>{
      result2 = JSON.parse(JSON.stringify(result2));

      res.render("layout", { title: "Employee", pagename: "employee/index", result: result1, singleEmp : result2[0]});
    })
  });
});






routes.post("/", (req, res)=>{
  Employee.insert(req.body, (err, result)=>{
    
    result = JSON.parse(JSON.stringify(result));
    // console.log(result);
    var id = result.insertId;
    Employee.selectById(id, (err, result)=>{
      
      result = JSON.parse(JSON.stringify(result));
      // console.log(result);
      res.redirect("/employee");
    })
    
  })
});


routes.get("/delete/:id", (req, res)=>{
  var id = req.params.id;
  Employee.deleteById(id, (err, result)=>{
    
    result = JSON.parse(JSON.stringify(result));
    // console.log(result);
    res.redirect("/employee");
  });
});



module.exports = routes;