const assert = require('assert');
const Room = require('../room');

let room;
beforeEach(function() {
    room = new Room(20);
});

describe('Room', function() {

    it('should have an area in sqaure meters', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })
    

})