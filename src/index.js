//console.log("hello word");
//requiero/llamo a la app
const app = require('./app')
//llamo a la app. Creo un servidor en el puerto 3000
//app.listen(3000)
//obtener el valor de la variable port
app.listen(app.get('port'));
//mandamos un mensaje para ver que el servidor esta funcionando
console.log('Server on port', app.get('port'));