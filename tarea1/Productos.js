const config = require("./dbconfig")

class Productos{
    constructor(nombreProductos,descripcionProductos,estadoProductos,tamanoProductos,valor){ 
        this.nombreProductos=nombreProductos;
        this.descripcionProductos=descripcionProductos;
        this.estadoProductos=estadoProductos;
        this.tamanoProductos=tamanoProductos;
        this.valor=valor;
    }
}

module.exports = Productos;