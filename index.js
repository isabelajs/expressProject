const express = require('express');
//inicializamos el metodo que nos va a ayudar a constuir nuestra aplicación
const app = express();
//asignamos el puerto que queremos usar
const port = 3000;

//hago una peticion de obtener donde le vamos a enviar la respuesta
app.get('/', (req, res) => {
  res.send('Hello servidor lindo');
});

app.get('/pepe', (req, res) => {
  res.json([
    {
      name: 'pepe',
      edad: '25',
    },
    {
      name: 'camilo',
      edad: '50',
    },
  ]);
});

//los dos puntos significan que le voy a asignar un parametro
app.get('/pepe/:id', (req, res) => {
  res.json({
    name: 'pepe',
    edad: '25',
  });
});

//configuración del puerto
app.listen(port, () => {
  console.log('Mi port' + port);
});
