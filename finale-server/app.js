var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

var jwt = require("jsonwebtoken");
var mongodb = require("mongodb");

var upload = require("express-fileupload");


app.use(bodyParser());
app.use(cors());
app.use(upload());


app.use(express.static(__dirname+"/public"));

app.post("/api/adv/signup", (req, res)=>{
    MongoClient.connect(url, (err, client)=>{
        var db = client.db("tss11");
        req.body.status=1;
        db.collection("adv").insert(req.body, (err, result)=>{
            res.send(result);
        })
    })
});

app.get("/api/admin/changestatus/:id/:status", (req, res)=>{
    console.log(req.params);
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss11");
        // var x = req.params.status ? 0 : 1;
        if(req.params.status==1){
            var x = 0;
        }
        else{
            var x = 1;
        }
        db.collection("adv").update({ _id : mongodb.ObjectId(req.params.id)}, { $set : { status : x}}, (err, result)=>{
            res.send(result);
        })
        
    })
})





// after login view profile
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


app.post("/api/adv/addservcie", backdoor, (req, res)=>{
    console.log("-----",req.files);
    console.log("*****",JSON.parse(req.body.data));
});



app.post("/demo", (req, res)=>{
    // console.log(req.files);
    req.files.photo.mv(__dirname+"/public/assets/"+req.files.photo.name, (err)=>{

        MongoClient.connect(url, (err, client)=>{
            var db = client.db("tss11");
            var obj = {name : req.files.photo.name};
            db.collection("image").insert(obj, (err, result)=>{
                
                res.send({ path: "http://localhost:3000/assets/" + req.files.photo.name });
            });
        })


        
    });
});

app.get("/demo", (req, res)=>{
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss11");
      
        db.collection("image").find().toArray((err, result)=>{
            // res.send(result);
            var arr = [];


            result.forEach(function(x){
                var obj = { path : "http://localhost:3000/assets/"+x.name};
                arr.push(obj);
            });
            res.send(arr);
        })
    })
})



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


app.get("/api/admin/advlist", (req, res)=>{
    MongoClient.connect(url, (err, client)=>{
        var db = client.db("tss11");
        db.collection("adv").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})





app.post("/api/admin/login", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss11");
        db.collection("admin").find({ username: req.body.email }).toArray((err, result) => {
            if (result.length > 0) {
                if (result[0].password == req.body.password) {
                    var obj = { id: result[0]._id };
                    var token = jwt.sign(obj, "this is my secret key", { expiresIn: 3600 });
                    res.status(200).send({
                        success: true,
                        token
                    });
                }
                else {
                    res.status(401).send({
                        success: false,
                        status: 2
                    });
                }
            }
            else {
                res.status(401).send({
                    success: false,
                    status: 1
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