const model = require('./model');

const webResponseError = require('../../constants/webResponseError');
const webResponse = require('../../entities/webResponse');

module.exports = {
  async analyze(req, res) {
    // Guardamos la información de la petición en los logs

    // Comprobamos las imagenes
    const listImages = req.files;

    // Si no se ha enviado ninguna imagen se devuelve un JSON con error
    if (!listImages) {
      webResponse.status = 400;
      webResponse.error = true;
      webResponse.errorMessage = webResponseError.NO_IMAGES_SENDED;
      return res.status(400).send(webResponse);
    }

    // Procesamos la imagen con la IA
    //const resizedImages = await model.resize(listImages);

    //const result = await model.predict(listImages[0]);

    console.log(result);

    webResponse.status = 200;
    webResponse.data = {};
    webResponse.error = '';
    webResponse.errorMessage = '';

    return res.status(200).send(webResponse);
  },
};
