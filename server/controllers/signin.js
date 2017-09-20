const users = require('../models/user');
const jwt = require('jsonwebtoken');
const random = require('../helpers/hash')
const dotenv = require('dotenv').config()

exports.signin = (req, res) => {
  users.userModel.findOne({
      username: req.body.username
    })
    .then(data => {
      pass = random.hashish(req.body.password, data.salt)
      if (pass == data.password) {
        jwt.sign({
          username: data.username
        }, process.env.YOMOS_SECRET, (err, token) => {
          if(err) console.log(err)
          console.log(token)
          res.send(token)
        });
      } else {
        res.send('wrong password')
      }
    })
    .catch(err => res.send('nousername'))
}
