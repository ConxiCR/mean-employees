//Lógica del servidor
//para tener código de la aplicación o del servidor. Código o modulo relacionado con al app
//requerimos express para poder crear un servidor(rutas)
const express = require('express');
//requerimos modulo morgan
const morgan = require('morgan')
//ejecuto express
const app = express()
//defino una variable para el tema del puerto y poder modificar si se necesita. Enviroment variables
//process.env.PORT estamos diciendo que si existe definido un puerto cogelo, sino utiliza el 4000. En nuestro caso es indefinido porque no esta definido
//variables de entorno(environment variables) process.env.PORT
app.set('port', process.env.PORT || 4000);
//utilizamos un middleware que es una función que permite procesar algo antes de que termine. Escucha las peticiones y las muestra en consola
app.use(morgan('dev'))
//exporto module
module.exports = app;