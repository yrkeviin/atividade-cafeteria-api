const Cafe = require("./Cafe");

class ListaCafes {
    constructor() {
        this.cafes = [];
        this.proximoId = 1;
    }
    addCafe(cliente, pedido, valor) {
        const novoCafe = new Cafe(this.proximoId++, cliente, pedido, valor);
        this.cafes.push(novoCafe);
        return novoCafe;
    }
    listarCafes() {
        return this.cafes;
    }
    buscarCafe(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }
    deletarCafe(id) {
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1) {
            return this.cafes.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = ListaCafes();