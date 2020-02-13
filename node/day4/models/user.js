var connect = require("../config/connect");
module.exports.find=function(where, cb){
    connect(function(err, client){
        var db = client.db("tss11");
        db.collection("user").find(where).toArray(cb);
    })
}
module.exports.save=function(obj, cb){
    connect((err,client)=>{
        var db = client.db("tss11");
        db.collection("user").insert(obj, cb);
    })
}

module.exports.delete=function(where, cb){
    connect((err, client)=>{
        var db = client.db("tss11");
        db.collection("user").remove(where, cb);
    })
}
module.exports.update=function(where, obj, cb){
    connect((err, client)=>{
        var db = client.db("tss11");
        db.collection("user").update(where, {$set : obj}, cb);
    })
}