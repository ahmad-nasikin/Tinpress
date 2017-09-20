var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/spotifyController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/hai', (req,res) => {
//   res.send('hai')
// })

router.post('/spotify/search' , spotifyController.search)

module.exports = router;