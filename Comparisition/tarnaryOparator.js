var n = 101;

var m =Math.random()*n;
var l = Math.round(m);

var remainder = l % 2 == 0 ? "even" : "odd";

console.log("This Number is",l,"That is" ,remainder,"Number");