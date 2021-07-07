//console.log("hello word");
//requerimos express para poder crear un servidor(rutas)
const express = require ('express')
//llamada al servidor. Ejecuto express
const app = express()
//exporto la app. Escucho en el puerto asignado
app.listen(3000)
//mensaje para saber que el servidor ya funciona
console.log('Server on port', 3000)