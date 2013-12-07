
/*
 * GET home page.
 */
var path = require('path');

exports.test = function(req, res){
    res.sendfile(__dirname +'.'+'/public/test.html');
};
