const config = require("./dbconfig")

class Categoria{
    constructor(idCategoria,nombreCategoria,descripcionCategoria,estadoCategoria){
        this.idCategoria=idCategoria;
        this.nombreCategoria=nombreCategoria;
        this.descripcionCategoria=descripcionCategoria;
        this.estadoCategoria=estadoCategoria;
    }
}

module.exports = Categoria;