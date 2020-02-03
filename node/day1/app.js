//  the express module is used for web freamework
var express = require("express");
// express() calling constroctur of express
var app = express();
// app.listen function create a server with 3000 port


//-------------CREATEING OUR ROUTES ------

app.get("/about", function(req, res){
    // res.send("<h1>this is about page</h1>");
    res.sendFile(__dirname+"/about.html");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

// app.get("/contact", function () {
//     console.log("this is contact");
// });
// app.get("/", function(){

// });







app.listen(3000, function(){
    // console.log(console);
    console.log("server running");
});