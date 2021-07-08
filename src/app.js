//Lógica del servidor
//para tener código de la aplicación o del servidor. Código o modulo relacionado con al app
//requerimos express para poder crear un servidor(rutas)
const express = require('express');
//requerimos modulo morgan
const morgan = require('morgan')
//ejecuto express
const app = express()
//utilizamos un middleware que es una función que permite procesar algo antes de que termine. Escucha las peticiones y las muestra en consola
app.use(morgan('dev'))
//exporto module
module.exports = app;