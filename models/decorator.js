class Decorator{

    constructor(){
        this.stock = []
    }
    
    addPaintStock(paintCan){
        this.stock.push(paintCan);
    }
}

module.exports = Decorator;