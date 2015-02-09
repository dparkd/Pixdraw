var express = require('express');
var router = express.Router();
var color = require('colourlovers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PixDraw' });
});

// router.get('/draw', function(req, res, next) {
//   res.render('draw', { title: 'PixDraw - Draw Square' });
// });

router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'PixDraw - Setup' });
});

router.post('/draw', function(req, res) {
	var canvasSize = req.body.canvasSize;
	var pixelSize = req.body.pixelSize;

	//Determine the aspect ratio of the canvas
	if (canvasSize == 'one') {
		var height = '400';
		var width = '400';
		//Determine the pixel size
		if (pixelSize == '20px'){
			var pixelNumber = 400;
		}
		else if (pixelSize == '10px'){
			var pixelNumber = 1600;
		}
		else if (pixelSize == '5px'){
			var pixelNumber = 6400;
		}
	} else if (canvasSize == 'two') {
		var height = '300';
		var width = '400';
		//Determine the pixel size
		if (pixelSize == '20px'){
			var pixelNumber = 300;
		}
		else if (pixelSize == '10px'){
			var pixelNumber = 1200;
		}
		else if (pixelSize == '5px'){
			var pixelNumber = 4800;
		}
	}

	

	res.render('draw', {title:'PixDraw - Draw', height:height, width:width, pixelNumber:pixelNumber, canvasSize:canvasSize, pixelSize:pixelSize});

	
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
