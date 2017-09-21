const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/users', userController.findUsers)
router.delete('/users/:id', userController.removeUser)


module.exports = router;
