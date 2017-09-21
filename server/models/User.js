var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  fbId: {type: String, default: null}
});

var User = mongoose.model('users', userSchema);

module.exports = User
