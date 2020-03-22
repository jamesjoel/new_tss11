var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

module.exports = function(call_back){
  mongoClient.connect(url, call_back);
}