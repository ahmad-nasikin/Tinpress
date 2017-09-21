const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authHelper = require('../middlewares/authHelper');

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/users', userController.findUsers) // todo: harus pasang middleware auth juga nanti admin only
router.delete('/users/:id', authHelper.isLogin, authHelper.isAuthUser, userController.removeUser)


module.exports = router;
