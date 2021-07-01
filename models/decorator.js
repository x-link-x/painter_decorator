class Decorator{

    constructor(){
        this.stock = []
    }
    
    addPaintStock(paintCan){
        this.stock.push(paintCan);
    }

    totalLitres(){
        let total = 0;
        for(let can of this.stock) {
            total += can.litres;
        }
        return total;
    }

    hasEnoughPaint(room) {
        if (room.area < this.totalLitres()) {
            return true;
        } else {
            return false;
        }
    }

    paintRoom(room) {
        if (this.hasEnoughPaint(room) === true) {
            room.painted = true;
        }
    }
}

module.exports = Decorator;