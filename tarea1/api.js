var db = require('./dboperations');
var Categoria = require('./Categoria');

const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
const { prototype } = require('./Categoria');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})

async function obtenerCategoria(request,response){
    var resultado = await dboperations.getCategoria();
    response.send(resultado);    
 }
app.get('/Categoria', obtenerCategoria)

async function obtenerProductos(request,response){
    var resultado = await dboperations.getProductos();
    response.send(resultado);    
 }
app.get('/obtenerProductos', obtenerProductos)

var port = process.env.PORT || 8091;
app.listen(port);
console.log(' La API esta corriendo en el puerto: '+port);