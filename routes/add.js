var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/submit', function(req, res, next) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  var generateUrlName = function(name) {
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};

  var title = req.body.title;
  var body = req.body.body; 
  var url_name = generateUrlName(title);
  var p = new models.Page({ "title": title, "body":body, "url_name":url_name });

  console.log(p);
  p.save();
  res.redirect('/');

});

module.exports = router;


