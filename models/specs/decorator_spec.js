const assert = require('assert');
const Decorator = require('../decorator');

let decorator;
beforeEach(function() {
    decorator = new Decorator();
});

describe('Decorator', function() {

    it('should start with an empty paint stock', function() {
        const actual = decorator.stockIsEmpty;
        assert.strictEqual(actual, true);
    })
    

})