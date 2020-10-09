var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

// GET ABOUT PAGE
router.get('/about', (req, res) => {
  res.render('about_me', {title: 'About Me'})
});

//GET CONTACT PAGE
router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact'})
});

//GET WATER PAGE
router.get('/water', (req, res) => {
  res.render('water')
});

module.exports = router;
