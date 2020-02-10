var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");


// the MongoClient property has been create connection from NODE to MONGODB

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());



app.post("/save", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
        var db = client.db("tss11_30");
        db.collection("teacher").insert(req.body, (err, result)=>{
            res.redirect("/teacher");
        })
    });






});


app.get("/teacher", (req, res)=>{

    // Create a Connect to Mongodb with "mongodb://localhost:27017" URL
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        var db = client.db("tss11_30");
        db.collection("teacher").find().toArray((err, result) => {
            res.render("layout", { pagename : "teacher", title : "Teacher", result : result});
        });
    });
});





app.get("/", (req, res)=>{
    res.render("layout", { pagename : "home", title : "Home"});
})
app.get("/about", (req, res) => {
    res.render("layout", { pagename: "about", title :  "About"});
})
app.get("/contact", (req, res) => {
    res.render("layout", { pagename: "contact", title :  "Contact"});
})

app.get("/help", (req, res) => {
    res.render("layout", { pagename: "help", title :  "Help"});
})






app.listen(3000, ()=>{
    console.log("server running");
});