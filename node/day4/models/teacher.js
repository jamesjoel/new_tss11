var connect = require("../config/connect");
module.exports.find=function(cb){
    connect(function(err, client){
        var db = client.db("tss11");
        db.collection("teacher").find().toArray(cb);
    })
}
module.exports.save=function(obj, cb){
    connect((err,client)=>{
        var db = client.db("tss11");
        db.collection("teacher").insert(obj, cb);
    })
}