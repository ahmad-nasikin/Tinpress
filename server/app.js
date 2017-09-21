const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tinpres');

const index = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)


app.listen(3000, () => {
  console.log('Listening Port 3000');
})