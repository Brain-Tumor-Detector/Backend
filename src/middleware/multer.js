const multer = require('multer');

//Setting storage engine
const storageEngine = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({
  storage: storageEngine,
});

module.exports = upload;
