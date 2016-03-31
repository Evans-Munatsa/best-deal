var fs = require('fs') 


var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var temp = new Array();
temp = str.split(",");

for (a in temp ) {
    temp[a] = parseFloat(temp[a]);
}

console.log(temp)