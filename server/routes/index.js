var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'NST Survey'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'NST Survey'});
});

/*
router.get('/survey', function(req, res, next){
  res.render('survey', {title: 'Create Survey Page'})
})

*/

router.get('/surveyDB', function(req, res, next){
  res.render('surveyDB', {title: 'Existing Survey Page'})
})


module.exports = router;
