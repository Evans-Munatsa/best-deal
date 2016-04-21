var avo = require('../avo');
var assert = require('assert');

describe('string to array', function() {
    it('should return an array of split numbers', function() {
        var result = avo.convert("1 for R3, 2 for R7, 3 for R10, 5 for R14.50")
        assert.deepEqual(result, ["1", "3", "2", "7", "3", "10", "5", "14.50"]);
    });

    it("should return the objects of deals", function() {
        var result = avo.mapped_objects(["1", "3", "2", "7", "3", "10", "5", "14.50"])
        assert.deepEqual(result, [{
            Deal: 1,
            price: 3,
            quantity: 1
        }, {
            Deal: 2,
            price: 7,
            quantity: 2
        }, {
            Deal: 3,
            price: 10,
            quantity: 3
        }, {
            Deal: 4,
            price: 14.5,
            quantity: 5
        }]);
    })

    it("returns the price for a single price", function() {
        var result = avo.single([{
            Deal: 1,
            price: 3,
            quantity: 1
        }, {
            Deal: 2,
            price: 7,
            quantity: 2
        }, {
            Deal: 3,
            price: 10,
            quantity: 3
        }, {
            Deal: 4,
            price: 14.5,
            quantity: 5
        }])
        assert.deepEqual(result, [{
            Deal: 1,
            pricePerAvo: "3.00"
        }, {
            Deal: 2,
            pricePerAvo: "3.50"
        }, {
            Deal: 3,
            pricePerAvo: "3.33"
        }, {
            Deal: 4,
            pricePerAvo: "2.90"
        }])
    })


    it("returns the price of the cheapest deal", function() {
        var result = avo.cheap([{
            Deal: 1,
            pricePerAvo: "3.00"
        }, {
            Deal: 2,
            pricePerAvo: "3.50"
        }, {
            Deal: 3,
            pricePerAvo: "3.33"
        }, {
            Deal: 4,
            pricePerAvo: "2.90"
        }])
        assert.deepEqual(result, {
            Deal: 4,
            pricePerAvo: "2.90"
        })
    })

    it("returns the most expensive deal", function() {
        var result = avo.expensive([{
            Deal: 1,
            pricePerAvo: "3.00"
        }, {
            Deal: 2,
            pricePerAvo: "3.50"
        }, {
            Deal: 3,
            pricePerAvo: "3.33"
        }, {
            Deal: 4,
            pricePerAvo: "2.90"
        }])
        assert.deepEqual(result, {
            Deal: 2,
            pricePerAvo: "3.50"
        })
    })

    it("returns the average of all", function() {
        var result = avo.average([{
            Deal: 1,
            price: 3,
            quantity: 1
        }, {
            Deal: 2,
            price: 7,
            quantity: 2
        }, {
            Deal: 3,
            price: 10,
            quantity: 3
        }, {
            Deal: 4,
            price: 14.5,
            quantity: 5
        }])

        assert.deepEqual(result, "3.14");
    })
});