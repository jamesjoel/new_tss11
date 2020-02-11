var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/employee", require("../controllers/employee"));

module.exports = routes;