'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3900;

//Cargamos body es un mifddleware para analizar cerpos  a trabes de la url
app.use(bodyParser.urlencoded({extended: false}))

//Cualquier peticion la convertimos en json:
app.use(bodyParser.json());

//Activar el CORS para permitir las peticiones AJAX y HTTP desde el fronted
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Accees-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.listen(port, () =>{
    console.log('Lanzando la aplicación en puerto: ' + port)
});