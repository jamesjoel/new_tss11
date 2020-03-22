var connect = require("../config/connect");

module.exports.find = function(where , call_back){
  connect(function (err, client){
    var db = client.db("node_crud");
    db.collection("user").find(where).toArray(call_back);
  });
}

module.exports.delete=function(where, call_back){
  connect((err, client)=>{
    var db = client.db("node_crud");
    db.collection("user").remove(where, call_back);
  });
}

module.exports.update=function(where, call_back){
  connect((err, client)=>{
    var db = client.db("node_crud");
    db.collection("user").update(where, {set : obj}, call_back);
  })
}