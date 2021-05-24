var express = require('express');
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const pathString = `${__dirname}/item.json`;
  fs.readFile(pathString, function(err, data) {
      
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const product = JSON.parse(data);
      
    res.send(product);
});
  
});

module.exports = router;