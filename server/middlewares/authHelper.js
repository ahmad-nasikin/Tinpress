const jwt = require('jsonwebtoken')
require('dotenv').config()

const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.JWT_SECRET, (err,decoded) => {
    if(err) {
      res.send(err)
    } else
      req.id = decoded._id
      next()
  }) //token = Authorization
}

const isAuthUser = (req, res, next) => {
  if(req.id == req.params.id) {
    next()
  } else {
    res.send('bukan user yang berwenang')
  }
}


module.exports = {
  isLogin,
  isAuthUser
}
