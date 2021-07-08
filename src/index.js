//console.log("hello word");
//requerimos express para poder crear un servidor(rutas)
const express = require('express');
const morgan = require('morgan')
//ejecuto express
const app = express()
//utilizamos un middleware que es una función que permite procesar algo antes de que termine. Escucha las peticiones y las muestra en consola
app.use(morgan('dev'))
//llamo a la app. Creo un servidor en el puerto 3000
app.listen(3000);
console.log('Server on port', 3000);