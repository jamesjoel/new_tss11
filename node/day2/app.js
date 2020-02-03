var express = require("express");
var app = express();
// Template Engine Using Here

app.set("view engine", "ejs");

// app.set("views", "pages");


app.get("/", (req, res)=>{
    var a = "rohit";
    res.render("index", { name : a, city : "indore" });
})


app.listen(3000, ()=>{
    console.log("server running");
});