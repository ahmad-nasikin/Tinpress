const express = require('express')
const router = express.Router();
const imgControllers = require('../controllers/imagesController')
const authHelper = require('../middlewares/authHelper');

// authHelper.isLogin,
router.get('/',  imgControllers.getImages)
router.post('/', imgControllers.createImage)
router.delete('/:id', imgControllers.removeImage)

module.exports = router;
