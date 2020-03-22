var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

module.exports = function(call_back){
  MongoClient.connect(url, call_back);
}