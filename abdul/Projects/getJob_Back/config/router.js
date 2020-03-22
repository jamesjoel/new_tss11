var express = require("express");
var routes = express.Router();
var jwt = require("jsonwebtoken");

routes.use("/api/advt/signup", require("../controller/signup"));
routes.use("/api/advt/getUserData", backdoor, require("../controller/userdata"));
routes.use("/api/advt", backdoor, require("../controller/img_upload"));
routes.use("/api/loginauth", require("../controller/loginauth"));

function backdoor(req, res, next){
  if(!req.headers.authorization){
    res.status(401).send({
      message : "Unautorized User"
    });
  } else {
    var authToken = req.headers.authorization;
    if(!authToken){
      res.status(401).send({
        message : "Unauthorizes User"
      });
    } else{
      var obj = jwt.verify(authToken, "this is login secret");
      if(!obj){
        res.status(401).send({
          message : "Unauthorized User"
        });
      }
      req.userData = obj
    }
    next();
  }
}

module.exports = routes;