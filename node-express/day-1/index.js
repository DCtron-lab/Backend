var Test = require("./require_test");

var obj = new Test(); //access class by creating class object
var returned_val1 = obj.print(); //access method 
var returned_val2 = obj.abc();
var returned_val3 = obj.xyz();
console.log(returned_val1, returned_val2, returned_val3);