var express = require("express");
var app = express();
// Template Engine Using Here

app.set("view engine", "ejs");
// app.set("views", "pages");

app.use(express.static(__dirname+"/public"));
// serving static file(image, css, js) from SERVER to CLIENT

app.get("/", (req, res)=>{
    var a = "rohit";
    res.render("index", { name : a, city : "indore" });
})

app.get("/about", (req, res)=>{
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "james",
            age : 25,
            city : "ujjain"
        }
    ];



    res.render("about", { data : data });
})


app.listen(3000, ()=>{
    console.log("server running");
});