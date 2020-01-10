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
        password : "11"
    },
    {
        id: 2,
        full_name: "Swati",
        username: "swati@gmail.com",
        password: "11"
    },
    {
        id: 3,
        full_name: "James",
        username: "james@gmail.com",
        password: "22"
    }

]


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