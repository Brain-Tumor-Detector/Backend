const logger = require('../config/logger');

module.exports = {
  /**
   * Este método se encarga de logear una serie de datos de cada petición pasada por parámetro
   * @param {*} req -> La request petición
   * @author Javier Plaza Sisqués
   */
  async log(req) {
    logger.info(`Petición a la ruta ${req.path}`);

    logger.info(req.headers);
    logger.info(req.body);
    logger.info(req.files);
  },
};
