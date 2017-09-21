
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tinpres');

// const index = require('./routes/index');
const signin = require('./routes/signin');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index)
app.use('/signin', signin )


app.listen(3000, () => {
  console.log('Listening Port 3000');
})
