var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  imgURL: String
});

var Image = mongoose.model('images', imageSchema);

module.exports = Image
