var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

app.use(bodyParser());
app.use(cors());




var user = [
    {
        id : 1,
        full_name : "Rohit",
        username : "rohit@gmail.com",
        password : "11",
        city : "indore",
        gender : "male"
    },
    {
        id: 2,
        full_name: "Swati",
        username: "swati@gmail.com",
        password: "11",
        city : "bhopal",
        gender : "female"
    },
    {
        id: 3,
        full_name: "James",
        username: "james@gmail.com",
        password: "22",
        city : "indore",
        gender : "male"
    }

];

app.get("/api/demo", backdoor, function(req, res){
    res.status(200).send(req.headers.authorization);
});

app.get("/api/getuser", backdoor, function(req, res){
    // console.log(req.userData);
    var id = req.userData.id;
    var n=0;
    for(var i=0; i<user.length; i++){
        if(user[i].id == id) {
            n=i;
            break;
        }
    }
    var obj = user[n];
    delete obj.password;
    res.status(200).send(obj);
    return;

});

function backdoor(req, res, next) {
    // console.log("----------------", req.headers);
    if (!req.headers.authorization) {
        res.status(401).send({ msg: "Unathorized User" });
    }
    else {
        if (req.headers.authorization == "") {
            res.status(401).send({ msg: "Unathorized User" });

        }
        else {
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if (!payload) {
                res.status(401).send({ msg: "Unathorized User" });

            }
            else {
                req.userData = payload;
                next();
            }
        }
    }
}





app.post("/api/login", function(req, res){
    var u = req.body.username;
    var p = req.body.password;
    var userObj;
    user.forEach(function(x){
        if(x.username == u){
            userObj = x;
            
        }
    });
    
    if(userObj===undefined)
    {
        res.status(401).send({
            success : false,
            msg : "This Username And Password is Incorrect"
        })
    }
    else
    {
        if(userObj.password == p)
        {
            var token = jwt.sign({ id: userObj.id, name: userObj.full_name }, "this is my secret key", { expiresIn: 3600 });
            res.status(200).send({
                success: true,
                token
            });
        }
        else{
            res.status(401).send({
                success: false,
                msg: "This Password is Incorrect"
            })
        }
    }

});






app.listen(3000, function(){
    console.log("server running");
});