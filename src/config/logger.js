const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    prettyPrint(),
  ),
  transports: [
    new transports.File({
      filename: 'logs/example.log',
    }),
    new transports.Console(),
  ],
});

module.exports = logger;
