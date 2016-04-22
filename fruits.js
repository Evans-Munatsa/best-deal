exports.objects = function(fruits) {
    var orangeSellers = [];

    for (var shop in fruits) {
        if (fruits[shop].hasOwnProperty("oranges")) {
            orangeSellers.push({
                Shop: shop,
                price: fruits[shop].oranges
            });
        }

    }
    console.log(orangeSellers);
    return orangeSellers;
}


//returns the cheapest oranges
exports.cheapest = function(cheap) {
    var oranges = [];
    for (var n = 0; n < cheap.length; n++) {
        oranges.push(cheap[n].price);
    }

    for (var i = 0; i < 1; i++) {
        oranges.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    console.log(oranges[1]);
    return oranges[1];
}

//returns the list of apples in acsending order
exports.apples_list = function(fruits) {
    var appleStore = [];

    for (var shop in fruits) {
        if (fruits[shop].hasOwnProperty("apples")) {
            appleStore.push({
                Shop: shop,
                price: fruits[shop].apples
            });
        }
    }

    appleStore.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
    console.log(appleStore);
    return appleStore
}