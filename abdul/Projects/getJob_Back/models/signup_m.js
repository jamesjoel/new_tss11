var connect = require("../config/connect");

module.exports.insertData = function(where, call_back){
  connect(function(err,client){
    var db = client.db("getJob");
    db.collection("register").insert(where,call_back);
  });
}

module.exports.getData = function(where, call_back){
  connect(function(err,client){
    var db = client.db("getJob");
    db.collection("register").find(where).toArray(call_back);
  });
}

module.exports.updateData = function(where, obj, call_back){
  connect(function(err,client){
    var db = client.db("getJob");
    db.collection("register").update(where, { $set : obj }, call_back);
  })
}