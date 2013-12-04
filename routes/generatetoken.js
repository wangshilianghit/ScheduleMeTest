
/*
 * GET home page.
 */
var path = require('path');
var User = require('../models/user.js');

exports.generatetoken = function (req, res) {
    requestASJSON = JSON.parse(JSON.stringify(req.body));
    console.log(requestASJSON);
    business = requestASJSON.business;

    var randomToken = Math.random().toString(36).substr(2, 15);
    console.log('token: ' + randomToken);
    User.findOne({business: business }, function (err, user) {

        if(err){
            res.send({error: "DB error"});
        }
        else if(user){
            user.accessCodeForEmployee = randomToken;
            user.save();
            res.send(JSON.stringify({code: randomToken}));;
        }
        else{
            res.send({message: "INVALID TOKEN"});
        }
    });
};