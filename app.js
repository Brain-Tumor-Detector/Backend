const express = require('express');
const app = express();

// Para las variables de entorno
require('dotenv').config();

app.listen(() => {
  console.log('====================================');
  console.log('🚀 Iniciando aplicación...');
  console.log('App activa en el puerto ' + process.env.PORT);
  console.log('====================================');
});
