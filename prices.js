var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var splitter = str.split(",");
var omega = [];

// loop that removes the (for R) and the space and create a dimensional array
splitter.forEach(function(str) {
    omega.push(str.split(" for R"));
});

//loop that calculates the total amounts for a single product
omega.forEach(function(str) {
  var price = str[1];
  var quantity = str[0];

  var division = price/quantity;
  var n = division.toFixed(2)
  console.log(n)
});


// console.log(omega);