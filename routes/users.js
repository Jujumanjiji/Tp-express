const router = require('express').Router()
const Users = require('../Model/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
