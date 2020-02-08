var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        if (err) {
            console.log(err);
            return;
        }

        var db = client.db("tss11");
        db.collection("teacher").find().toArray((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            // console.log(result);
            res.render("layout", { title: "Teacher", pagename: "teacher/index", result : result });
        });


    });
});
routes.post("/save", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        var db = client.db("tss11");
        db.collection("teacher").insert(req.body, (err, result)=>{
            res.redirect("/teacher");
        });
    });
});




module.exports = routes;