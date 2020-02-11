var connect = require("../config/connect");
module.exports.find=function(where, cb){
    connect(function(err, client){
        var db = client.db("tss11");
        db.collection("teacher").find(where).toArray(cb);
    })
}
module.exports.save=function(obj, cb){
    connect((err,client)=>{
        var db = client.db("tss11");
        db.collection("teacher").insert(obj, cb);
    })
}

module.exports.delete=function(where, cb){
    connect((err, client)=>{
        var db = client.db("tss11");
        db.collection("teacher").remove(where, cb);
    })
}