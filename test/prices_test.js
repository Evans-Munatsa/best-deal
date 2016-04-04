var assert = require('assert');

describe('string to array', function(){
	it('should return a dimensional array', function(){
		var prices = require('../prices');
        assert.equal([ [ '1', '3' ], [ ' 2', '7' ], [ ' 3', '10' ], [ ' 5', '14.50' ] ]);
  })
})

 // assert.deepEqual(["Milk", "Bread", "Coffee"], products);
 //            done();