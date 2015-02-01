var express = require('express');
var router = express.Router();
var color = require('colourlovers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PixDraw' });
});

router.get('/draw', function(req, res, next) {
  res.render('draw', { title: 'PixDraw - Draw Square' });
});

router.get('/draw2', function(req, res, next) {
  res.render('draw2', { title: 'Drawing App' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'PixDraw - Roadmap' });
});




//API functions

// color.get('/palettes', {
//         hueOption:  'blue',
//         keywords:   'chartreuse',
//         sortBy:     'DESC',
//         numResults: 20
//     },function(err, data) {
//     if(err) throw err;
//     console.log(data);
// });


module.exports = router;
