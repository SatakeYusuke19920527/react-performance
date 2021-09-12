var express = require('express');
var router = express.Router();

let userArray = [
  {
  	id: 1,
  	name: "satake"
  },
  {
  	id: 2,
  	name: "masalib"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
