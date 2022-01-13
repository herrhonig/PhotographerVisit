var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET blog-single. */
router.get('/blog-single', function(req, res, next) {
  res.render('blog-single');
});

/* GET blog-. */
router.get('/blog', function(req, res, next) {
  res.render('blog');
});


module.exports = router;
