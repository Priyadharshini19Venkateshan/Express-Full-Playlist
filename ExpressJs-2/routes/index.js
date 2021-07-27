var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express learning', subtitle: 'Will learn about express end to end' });
});

router.get('/tutorials', function(req, res, next) {
   var coursename =  req.query.course;
   let coursetitle= coursename + 'learning';
  res.render('index', { title: coursetitle, subtitle: 'Will learn about '+ coursename +' end to end' });
});

module.exports = router;
