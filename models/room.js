class Room{

    constructor(area, painted=false) {
        this.area = area;
        this.painted = painted;
    }

    paintRoom(){
        this.painted = true;
    }

}

module.exports = Room;