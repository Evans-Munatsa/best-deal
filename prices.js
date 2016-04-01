var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var splitter = str.split(",");
var omega = [];

// loop that removes the (for R) and the space and create a dimensional array
splitter.forEach(function(str) {
    omega.push(str.split(" for R"));
});

//create a loop that calculates the total amounts for a single product
console.log(omega);