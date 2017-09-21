var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  fbId: String
});

var User = mongoose.model('users', userSchema);

module.exports = User
