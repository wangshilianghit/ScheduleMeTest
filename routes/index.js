
/*
 * GET home page.
 */
var path = require('path');

exports.index = function(req, res){
  res.sendfile(__dirname +'.'+'/public/index.html');
};