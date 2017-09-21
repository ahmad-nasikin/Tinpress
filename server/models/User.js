const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  fbid: {type: String, default: null}
}, {
  timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User;
