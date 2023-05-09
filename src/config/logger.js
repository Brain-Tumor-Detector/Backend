const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: `logs/${new Date().toISOString().split('T')[0]}.log` }), new winston.transports.Console()],
});

module.exports = logger;
