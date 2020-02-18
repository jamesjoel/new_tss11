var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var nocache = require("nocache");
var upload = require("express-fileupload");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());
app.use(nocache());
app.use(upload());


app.use(function(req, res, next){
    res.locals.logo = "The Stepping Stone";
    res.locals.session = req.session;
    next();
})



app.use(require('./config/routes'));

app.listen(3000, ()=>{
    console.log("server running");
})