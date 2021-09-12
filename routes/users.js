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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(userArray);
});

router.post('/add', function(req, res, next) {
  console.log("🚀 ~ file: users.js ~ line 21 ~ router.post ~ res", res.body)
  userArray.push({
    id: userArray.length + 1,
    name: req.body.name
  })
  res.json(userArray);
});

router.post('/delete', function (req, res, next) {
  console.log("🚀 ~ file: users.js ~ line 29 ~ req", req.body.id)
  const result = userArray.filter(user => user.id !== req.body.id)
  res.json(result);
});

router.post('/modefy', function (req, res, next) {
  console.log("🚀 ~ file: users.js ~ line 36 ~ req", req.body)
  console.log("🚀 ~ file: users.js ~ line 36 ~ req", req.body.id)
  console.log("🚀 ~ file: users.js ~ line 39 ~ userArray[req.body.id].name", userArray[req.body.id-1].name)
  userArray[req.body.id-1].name = req.body.newName
  console.log("🚀 ~ file: users.js ~ line 39 ~ userArray", userArray)
  res.json(userArray);
});

module.exports = router;