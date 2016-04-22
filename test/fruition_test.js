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
        assert.equal(result, 4);
    })

    it("returns apples in ascending order by price", function() {
        var result = fruits.apples_list(list);
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
})