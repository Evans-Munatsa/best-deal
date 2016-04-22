var fruits = {
    "woolingsworth": {
        "apples": 4,
        "bananas": 3,
        "oranges": 12
    },

    "chockers": {
        "bananas": 2,
        "apples": 5,
        "oranges": 4
    },

    "pickle pay": {
        "bananas": 4,
        "oranges": 7
    },

    "shopwrong": {
        "apples": 2,
        "bananas": 3
    },

    "kwakspar": {
        "oranges": 9,
        "apples": 4
    }
};
console.log(fruits);

var orangeSellers = [];

for (var shop in fruits) {
    if (fruits[shop].hasOwnProperty("oranges")) {
        orangeSellers.push({
            Shop: shop,
            price: fruits[shop].oranges
        });
        console.log(orangeSellers);

        var oranges = [];
        for (var n = 0; n < orangeSellers.length; n++) {
            oranges.push(orangeSellers[n].price);
        }

        for (var i = 0; i < 1; i++) {
            oranges.sort(function(a, b) {
                return a.price - b.price;
            });
        }
    }
}

// console.log(oranges[0])
console.log(oranges[1])