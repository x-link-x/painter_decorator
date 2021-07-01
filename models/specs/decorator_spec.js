const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

let decorator;
beforeEach(function() {
    decorator = new Decorator();
    paintCan1 = new PaintCan(4);
    paintCan2 = new PaintCan(3);
    paintCan3 = new PaintCan(14)
    room = new Room(20);
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

    it('should be able to calculate total litres paint it has in stock', function(){
        decorator.addPaintStock(paintCan1);
        decorator.addPaintStock(paintCan2);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 7);
    });

    it('should be able to calculate whether it has enough paint to paint a room', function() {
        decorator.addPaintStock(paintCan1);
        decorator.addPaintStock(paintCan2);
        const actual = decorator.hasEnoughPaint(room);
        assert.strictEqual(actual, false);
    });

    it('should be able to paint room if has enough paint in stock', function() {
        decorator.addPaintStock(paintCan1);
        decorator.addPaintStock(paintCan2);
        decorator.addPaintStock(paintCan3);
        decorator.paintRoom(room);
        assert.strictEqual(room.painted, true);
        // assert.strictEqual(paintCan1.isEmpty(), true);
    })
    
    

})