//console.log("hello word");
//requiero/llamo a la app
const app = require('./app')
//llamo a la app. Creo un servidor en el puerto 3000
app.listen(3000);
console.log('Server on port', 3000);