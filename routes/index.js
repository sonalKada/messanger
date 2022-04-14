var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit-form', function(req, res, next) {
console.log(req.body.message,"sent by", req.body.senderName)
const message = req.body.message;
const senderName = req.body.senderName;
let content = `sent by ${senderName}
message:${message}`;
fs.writeFile(path.join(__dirname,"../message1.txt"),content, function(err){
  if (err){
    console.log(err);
    return;
  }
  res.render('submitted');

});
});

module.exports = router;
