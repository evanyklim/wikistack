var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {

  models.Page.find({}, 'title body url_name', function(err, docs) {
  	console.log(docs);
  	res.render('index', { title: 'Express', 
  						  docs: docs
						});
  });
});

router.get('/wiki/:url', function(req, res, next) {

	var urlName = req.params.url;
	console.log('urlName: ' + urlName);
	models.Page.findOne({ 'url_name': urlName }, function(err, page) {
		console.log(page);
		res.render('page', { page: page });
	});
});

module.exports = router;

