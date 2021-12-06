//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
var Categoria = require ('./Categoria');

async function getCategoria(){
    try{
        let pool = await sql.connect(config);
        let Categoria = await pool.request().query("select * from Categoria");
        return Categoria.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getProductos(){
    try{
        let pool = await sql.connect(config);
        let LoteMateriaPrima = await pool.request().query("select * from Productos");
        return Productos.recordsets;
    }catch(error){
        console.log(error);
    }
}
module.exports={
    getCategoria : getCategoria,
    getProductos : getProductos     
}