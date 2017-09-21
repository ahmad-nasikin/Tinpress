const User = require ('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const signup = function (req, res) {
  const password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      // req.body.password = hash;
      User.create({
        username: req.body.username,
        password: hash
      })
      .then(() => {
        res.send({msg:`register berhasil`})
      })
      .catch(err => {
        return res.status(400).send({msg: err.message})
      })
    })
  })
}

const signin = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if(!req.body.username || !req.body.password){
    res.send({msg: 'Silahkan masukan username dan password'})
  } else {
    User.findOne({username: req.body.username})
    .then(user => {
      console.log('ini user data', user);
      bcrypt.compare(password, user.password)
      .then(bcryptResult => {
        console.log('ini hasil compare',bcryptResult);
        if(bcryptResult){
          const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET);
          res.send({token: token})
        } else {
          res.send({msg: 'Password salah'})
        }
      })
    })
    .catch(err => {
      res.send({msg: 'username tidak ditemukan'})
    })
  }
}

const findUsers = (req, res) => {
  User.find({})
  .then(users => res.send(users))
  .catch(err => res.send({msg: err.message}))
}

const removeUser = function (req, res) {
  User.deleteOne({
    _id: req.params.id
  })
  .then(() => res.send({msg: 'user berhasil dihapus'}))
  .catch(err => res.send({msg: err.message}))
}



module.exports = {
  signup,
  signin,
  findUsers,
  removeUser
  // getAllUsers,
  // getUserById,
  // createUser,
  // editUser
}
