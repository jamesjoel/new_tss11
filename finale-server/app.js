var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

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
app.post("/api/adv/login", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss11");
        db.collection("adv").find({ email : req.body.email }).toArray((err, result)=>{
            if(result.length > 0)
            {

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