var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", afterLogin, require("../controllers/login"));
routes.use("/signup", afterLogin, require("../controllers/signup"));
routes.use("/teacher", backdoor, require("../controllers/teacher"));
routes.use("/dashboard", backdoor, require("../controllers/dashboard"));


routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
});







function backdoor(req, res, next){
    if(! req.session.isLoggedIn){
        res.redirect("/login");
        return;

    }
    next();
}

function afterLogin(req, res, next){
    if(req.session.isLoggedIn){
        res.redirect("/dashboard");
        return;
    }
    next();
}



module.exports = routes;