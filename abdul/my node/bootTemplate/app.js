var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.get("/", (req,res)=>{
  MongoClient.connect("mongodb://localhost:27017", (err,client)=>{
    if(err){
      console.log(err);
      return;
    }
    var db = client.db("boot_temp");
    db.collection("user").find().toArray((err,result)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log(result);
       res.render("layout",{pagename : "home", title : "Home Page", allData : result});
    })
  })
})

app.get("/about", (req,res)=>{
  res.render("layout",{pagename : "about", title : "About Page"});
})

app.get("/contact", (req,res)=>{
  res.render("layout",{pagename : "contact", title : "Contact Page"});
})


app.listen(3000, ()=>{
  console.log("bootstrap Template is running now");
})