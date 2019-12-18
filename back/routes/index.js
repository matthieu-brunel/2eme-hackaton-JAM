const express = require('express');
const router = express.Router();
const images = require('./images');
const charInfo = require('./charInfo')

router.use('/images', images);
router.use('/charInfo', charInfo);

module.exports = router;