const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

module.exports = {
  async resize(img) {
    // Redimensionamos las imagenes
    //const tensorImg = tf.browser.fromPixels(img.path);

    console.log(img.path);

    const imageBuffer = await fs.readFile(img.path, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      return data;
    });

    console.log(imageBuffer);

    return tf.image.resizeBilinear(tensorImg, [150, 150]);
  },
  async predict(image) {
    const model = await tf.loadLayersModel('file://model/json/model.json');
    console.log('Creado el modelo: ' + JSON.stringify(model));
    const predict = await model.predict(image);
    console.log('Predict: ' + predict);
    return predict;
  },
};
