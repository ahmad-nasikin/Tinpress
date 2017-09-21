const models = require('../models/User')
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'})

module.exports = {
  loginFb: (req, res) => {
  FB.api('/me', {fields: ['id','name','email']}, (response) => {
    models.findOne({
      id: response.id
    })
    .then( response => {
      if(response == null) {
        models.create({
          fbid: response.id,
          username: response.name,
          email: response.email
        })
        .then( response => {
          console.log('ini response', response);
          res.send(response)
        })
        .catch(err => {
          console.log({err: err.message});
        })
      }else{
        res.send(response)
      }
    })
    .catch((err) => {
      console.log({err: err.message});
    })
  })
  }
};
