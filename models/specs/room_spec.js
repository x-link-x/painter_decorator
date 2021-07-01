const assert = require('assert');
const Room = require('../room');

let room;
beforeEach(function() {
    room = new Room(20, false);
});

describe('Room', function() {

    it('should have an area in sqaure meters', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });

    

})