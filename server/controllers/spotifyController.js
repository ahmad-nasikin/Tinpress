'use strict'
// require('dotenv').config()

var request = require('request');

var client_id = '6fca76344a744fd4a61fe60409dfc2f2'; // Your client id
var client_secret = '13efe8a3ba0c4f23886f96e483b6d597'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
// console.log(authOptions);

// search: function (req,res) {
//   oauth.get(
//      `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
//      process.env.ACCESS_TOKEN, //test user token
//      process.env.ACCESS_TOKEN_SECRET, //test user secret
//      function (e, data, respond){
//        if (e) console.error(e);
//        res.send(JSON.parse(data));
//   });
// },
module.exports = {
search: function (req,res) {
    // console.log(authOptions);
    var status = req.body.search
    console.log(status);
    // res.send('hai')
    request.post(authOptions, function(error, response, body) {
      // console.log('SC ini errorr', error);
      // console.log('SC ini res', res);
      // console.log('SC ini req', req);
    if (!error && response.statusCode === 200) {

      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/search?q=${status}&type=playlist`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log('hasil body CONTROLLER',body);
        res.send(body);
      });
    }
  })
}
}
