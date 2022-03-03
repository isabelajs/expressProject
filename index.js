const express = require('express');
//inicializamos el metodo que nos va a ayudar a constuir nuestra aplicación
const app = express();
//asignamos el puerto que queremos usar
const port = 3000;
//petición de las rutas
const router = require('./router');

//hago una peticion de obtener donde le vamos a enviar la respuesta
app.get('/', (req, res) => {
  res.send('Hello servidor lindo');
});

router(app);

//configuración del puerto
app.listen(port, () => {
  console.log('Mi port' + port);
});
//estamos haciendo una pryeba
