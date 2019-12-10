var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  res.send('respond with a resource');
});

module.exports = router;

//Reference Stack Overflow
//https://stackoverflow.com/questions/48961804/nodejs-express-router-get-in-users-js