const assert = require('assert');
const PaintCan = require('../paint_can');

let paintCan;
beforeEach(function() {
    paintCan = new PaintCan(8);
});

describe('PaintCan', function() {

    it('should have a number of litres of paint', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 8);
    });

    it('should be able to check if its empty', function() {
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself of paint', function(){
        paintCan.emptyItself();
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, true);
    })

})