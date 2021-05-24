var express = require('express');
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
    res.send("hello Express");
});
  


module.exports = router;
