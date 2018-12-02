var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ALTIMIT OS: Ver. 5.982.127' });
});

module.exports = router;
