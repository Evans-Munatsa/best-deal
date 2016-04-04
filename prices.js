var fs = require('fs');

function avo() {
    var str = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

    var splitter = str.split(",");
    var omega = [];

    // loop that removes the (for R) and the space and create a dimensional array
    splitter.forEach(function(str) {
        omega.push(str.split(" for R"));
    });

    //loop that calculates the total amounts for a single product
    var money = [];

    omega.forEach(function(str) {
        var price = str[1];
        var quantity = str[0];

        var division = price / quantity;
        money.push(division.toFixed(2))
    });

    var min = Math.min.apply(null, money);
    var max = Math.max.apply(null, money);
    var average = max - min;

    console.log(omega);
    console.log(money);
    console.log(min);
    console.log(max);
    console.log(average);
}

avo()