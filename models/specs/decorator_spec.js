const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');

let decorator;
beforeEach(function() {
    decorator = new Decorator();
    paintCan1 = new PaintCan(4);
});

describe('Decorator', function() {

    it('should start with an empty paint stock', function() {
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 0);
    });

    it('can add a can of paint to paint stock', function(){
        decorator.addPaintStock(paintCan1);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    });
    

})