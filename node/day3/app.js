var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res)=>{
    res.render("layout", { pagename : "home", title : "Home"});
})
app.get("/about", (req, res) => {
    res.render("layout", { pagename: "about", title :  "About"});
})
app.get("/contact", (req, res) => {
    res.render("layout", { pagename: "contact", title :  "Contact"});
})

app.get("/help", (req, res) => {
    res.render("layout", { pagename: "help", title :  "Help"});
})






app.listen(3000, ()=>{
    console.log("server running");
});