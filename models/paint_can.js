class PaintCan{

    constructor(litres) {
        this.litres = litres;
    }

    isEmpty(){
        return this.litres === 0;
    }

    emptyItself(){
        this.litres = 0;
    }
}

module.exports = PaintCan;