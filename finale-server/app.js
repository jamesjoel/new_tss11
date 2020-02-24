var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

var jwt = require("jsonwebtoken");
var mongodb = require("mongodb");

app.use(bodyParser());
app.use(cors());

app.post("/api/adv/signup", (req, res)=>{
    MongoClient.connect(url, (err, client)=>{
        var db = client.db("tss11");
        db.collection("adv").insert(req.body, (err, result)=>{
            res.send(result);
        })
    })
});


app.get("/api/adv/signup", backdoor, (req, res)=>{
    var obj = req.userdata;
    MongoClient.connect(url, (err, client)=>{
        var db = client.db("tss11");
        db.collection("adv").find({ _id : mongodb.ObjectId(obj.id)}).toArray((err, result)=>{
            delete result[0].password;
            res.send(result[0]);
        })
    });
});


function backdoor(req, res, next){
    if(!req.headers.authorization)
    {
        res.status(401).send({
            message : "Unauthorized User"
        })
    }
    else{
        var token = req.headers.authorization;
        if(!token){
            res.status(401).send({
                message: "Unauthorized User"
            })
        }
        else{
            var obj = jwt.verify(token, "this is my secret key");
            if(!obj){
                res.status(401).send({
                    message: "Unauthorized User"
                })
            }
            req.userdata = obj;
        }
    }
    next();
}




app.post("/api/adv/login", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss11");
        db.collection("adv").find({ email : req.body.email }).toArray((err, result)=>{
            if(result.length > 0)
            {
                if(result[0].password == req.body.password)
                {
                    var obj = { id : result[0]._id, email : result[0].email};
                    var token = jwt.sign(obj, "this is my secret key", { expiresIn : 3600});
                    res.status(200).send({
                        success : true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success: false,
                        status: 2
                    });   
                }
            }
            else
            {
                res.status(401).send({
                    success : false,
                    status : 1
                }); // status : 1 --- username and password incorrect
            }
        });
    });
});









app.get("/api/adv/demo", (req, res)=>{
    res.send({ name : "rohit"});
})


app.listen(3000, ()=>{
    console.log("server running");
})