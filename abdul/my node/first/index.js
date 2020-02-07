// console.log("hello worls");

var value = require('./export_file');

console.log("val is",value);

var pathFn = require('path');

//this is shows various functions of path which can use according your need
console.log(pathFn);

var joinPath = pathFn.join(__filename);

console.log("this will so you full path, current folders file name", joinPath)

//C:\Users\ABDUL ISHAN\Angular Projects\new_tss11\abdul\my node\first\index.js

var checkBasePath = pathFn.basename(joinPath);

//If you want to identify base of your url use basename() of given url

console.log(checkBasePath);  // output is : index.js

// if you want to check your current use file extention so use 'extname()'

console.log(pathFn.extname(checkBasePath));  // o/p : .js