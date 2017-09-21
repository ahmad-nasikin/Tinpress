const express = require('express')
const router = express.Router();
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'})
const controllers = require('../controllers/signinController')


router.get('/', controllers.loginFb)





module.exports = router;
