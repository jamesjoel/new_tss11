var express = require("express");
var app = express();
var fs = require("fs")

var a = fs.readFile("./demo.txt", "utf-8");
