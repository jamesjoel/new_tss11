var express = require("express");

var routes = express.Router();

routes.use("/", require("../controllers/home-control"));
routes.use("/about", require("../controllers/about-control"));

module.exports = routes;