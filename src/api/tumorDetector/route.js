const express = require('express');
const controller = require('./controller');
const multer = require('../../middleware/multer');

const router = express.Router();

router.post('/analyze', multer.array('photos', process.env.MAX_NUM_IMAGES), controller.analyze);

module.exports = router;
