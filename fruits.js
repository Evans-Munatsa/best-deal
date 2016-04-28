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
    // console.log(orangeSellers);
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
exports.ascending = function(fruits) {
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
    // console.log(appleStore);
    return appleStore
}

//returns the list of apple in descending order
exports.descending = function(fruits) {
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
        return parseFloat(b.price) - parseFloat(a.price);
    });
    // console.log(appleStore);
    return appleStore
}

exports.cheapest = function(food) {
    var fruits = [];
  var price = 0;
  var cheap = "";
  for (var shops in food) {
    for (var fruit in food[shops]) {
        fruits.push(fruit);
      }
  }

  for (x = 0; x < fruits.length; x++) {
    var total = 0;
    var count = 0;
    for (var Shops in food) {
      if (food[Shops].hasOwnProperty(fruits[x])) {
        total += food[Shops][fruits[x]];
        count++;
      }
    }
    var averagePrice = total / count;
    if ((averagePrice < price) || price === 0) {
      price = averagePrice;
      cheap = fruits[x];
    }
  }
  // console.log(cheap);
  return cheap;
}