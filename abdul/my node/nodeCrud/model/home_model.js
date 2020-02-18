var connect = require("../config/connect");

module.exports.find = function(where, cb){
  connect(function(err,client){
    var db = client.db("node_crud");
    db.collection("user").find(where).toArray(cb);
  })
}

module.exports.update = function(where, obj, cb){
  connect(function(err,client){
    var db = client.db("node_crud");
    db.collection("user").update(where, {$set : obj, cb});
  })
}