var express = require("express");
var routes = express.Router();


routes.get("/", (req, res) => {
    // console.log(req.session);
   



    res.render("layout", { title: "Dashboard", pagename: "dashboard/index" });
});

module.exports = routes;