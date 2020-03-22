var connect = require("../config/connect");

module.exports.getData = function(where, cb){
  connect(function(err,client){
    var db = client.db("getJob");
    db.collection("register").find(where).toArray(cb);
  });
}