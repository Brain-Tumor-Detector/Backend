const express = require('express');
const logger = require('./src/config/logger');
const app = express();

// Para las variables de entorno
require('dotenv').config();

app.use(express.json());

// Establecemos el puerto
const PORT = process.env.PORT;
app.set('port', PORT);

// Configuramos las rutas
app.use(require('./src/api/tumorDetector/route'));

app.listen(PORT, () => {
  console.log('====================================');
  console.log('🚀 Iniciando aplicación...');
  console.log('App activa en el puerto ' + PORT);
  console.log('====================================');

  logger.info(`Servidor iniciado en el puerto ${PORT}`);
});
