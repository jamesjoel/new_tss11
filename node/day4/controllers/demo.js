var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
    var db = client.db("tss11");
    db.collection("").find().toArray(function(err, result){

    });
});