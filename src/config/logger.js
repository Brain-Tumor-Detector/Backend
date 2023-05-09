const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [new transports.File({ filename: 'logs/example.log' }), new transports.Console()],
});

module.exports = logger;
