const users = require('../models/user');
const random = require('../helpers/hash')

exports.signup = (req, res) => {
  let secret = random.randomStr(8);
  users.userModel.create({
      username: req.body.username,
      password: random.hashish(req.body.password, secret),
      salt: secret
    })
    .then(data => {
      res.send(data)
    })
}
