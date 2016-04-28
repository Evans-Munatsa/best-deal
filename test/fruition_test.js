var fruits = require("../fruits");
var assert = require("assert");


var list = {
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
}

describe("tests the fruition function", function() {
    it("returns the objects with lists", function() {
        var result = fruits.objects(list);

        assert.deepEqual(result, [{
            price: 12,
            Shop: "woolingsworth"
        }, {
            price: 4,
            Shop: "chockers"
        }, {
            price: 7,
            Shop: "pickle pay"
        }, {
            price: 9,
            Shop: "kwakspar"
        }]);
    })

    it("returns the cheapest oranges", function() {
        var result = fruits.cheapest([{
            price: 12,
            Shop: "woolingsworth"
        }, {
            price: 4,
            Shop: "chockers"
        }, {
            price: 7,
            Shop: "pickle pay"
        }, {
            price: 9,
            Shop: "kwakspar"
        }])
        assert.equal(result, "chockers: 4");
    })

    it("returns apples in ascending order by price", function() {
        var result = fruits.ascending(list);
        assert.deepEqual(result, [{
            price: 2,
            Shop: "shopwrong"
        }, {
            price: 4,
            Shop: "woolingsworth"
        }, {
            price: 4,
            Shop: "kwakspar"
        }, {
            price: 5,
            Shop: "chockers"
        }])
    })

    it("returns apples in descending order by price", function() {
        var result = fruits.descending(list);
        assert.deepEqual(result, [{
            price: 5,
            Shop: "chockers"
        }, {
            price: 4,
            Shop: "woolingsworth"
        }, {
            price: 4,
            Shop: "kwakspar"
        }, {
            price: 2,
            Shop: "shopwrong"
        }])
    })

    it("returns the cheapest fruit", function() {
        var result = fruits.cheapest(list);
        assert.equal(result, "bananas");
    })


    it("returns the seller of the fruit with the lowest price", function() {
        var result = fruits.cheap_seller(list);
        assert.equal(result, "chockers and shopwrong");
    })

    it("returns the shops that sell oranges", function() {
        var result = fruits.orange_shops(list);
        assert.deepEqual(result, ["woolingsworth", "chockers", "pickle pay", "kwakspar"]);
    })
})