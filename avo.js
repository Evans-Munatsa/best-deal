exports.convert = function(string) {
    var step1 = string.replace(/for /g, '').split(', ').join(",");
    var step2 = step1.split(' ').join('');
    var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");
    var array = step3;
    console.log(step3);
    return step3;
}

exports.mapped_objects = function(arr) {
    var quantity = [];
    var price = [];
    var map = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            quantity.push(arr[i]);
        } else if (i % 2 != 0) {
            price.push(arr[i]);
        }
    }
    for (var j = 0; j < quantity.length; j++) {
        map.push({
            Deal: j + 1,
            quantity: Number(quantity[j]),
            price: Number(price[j])
        });
    }
    console.log(map);
    return map;
}

//returns the price of a single product
exports.single = function(map) {
    var singlePrice = [];

    for (x = 0; x < map.length; x++) {
        var result = map[x].price / map[x].quantity;
        var num = Number(result).toFixed(2);
        singlePrice.push({
            Deal: x + 1,
            pricePerAvo: num
        });
    }
    console.log(singlePrice);
    return singlePrice;
}


//returns the cheapest deal
exports.cheap = function(cheapest) {
    for (var i = 0; i < 1; i++) {
        cheapest.sort(function(a, b) {
            return a.pricePerAvo - b.pricePerAvo;
        });
    }
    console.log(cheapest[0]);
    return cheapest[0]
}

//returns the most expensive deal
exports.expensive = function(expensive) {
    for (var i = 0; i < 1; i++) {
        expensive.sort(function(a, b) {
            return b.pricePerAvo - a.pricePerAvo;
        });
        console.log(expensive[0]);
        return expensive[0];
    }
}

//returns the average
exports.average = function(map) {
    var total = 0;
    var totalAvos = 0;
    for (var i = 0; i < map.length; i++) {
        total += map[i].price;
    }
    var Total = Number(total);

    for (var x = 0; x < map.length; x++) {
        totalAvos += map[x].quantity;
    }

    var TotalAvos = Number(totalAvos);
    var avg = Total / TotalAvos;

    console.log("Total: " + Total.toFixed(2));
    console.log("Average: " + avg.toFixed(2));
    return avg.toFixed(2);
    return Total;
}