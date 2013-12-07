var path = require('path');
var User = require('../models/user.js');

exports.employees = function(req, res){
    //make more elegant
    //if(authenticated)
    User.get(req.params.id, function(err, user){
        if (err) return next(err);
        if (!user.id) return res.send(404);
        res.json(user);
    });
};
exports.business = function(req, res){
    //make more elegant
    //if(authenticated)
    User.get(req.params.id, function(err, user){
        if (err) return next(err);
        if (!user.id) return res.send(404);
        res.json(user);
    });
};
exports.appointments = function(req, res){
    //make more elegant
    //if(authenticated)
    User.get(req.params.id, function(err, user){
        if (err) return next(err);
        if (!user.id) return res.send(404);
        res.json(user);
    });
};
exports.waitlist = function(req, res){
    //make more elegant
    //if(authenticated)
    User.get(req.params.id, function(err, user){
        if (err) return next(err);
        if (!user.id) return res.send(404);
        res.json(user);
    });
};

/*
 * GET home page.
 */
var path = require('path');
var User = require('../models/user.js');

exports.addappointment = function (req, res) {
    requestASJSON = JSON.parse(JSON.stringify(req.body));
    console.log(requestASJSON);
    firstName = requestASJSON.firstName;
    lastName = requestASJSON.lastName;
    email = requestASJSON.email;
    phone = requestASJSON.phone;
    notes = requestASJSON.notes;
    time = requestASJSON.time;
    /*
     var newUser = new User({email: email, password: password, firstName: firstName, lastName: lastName});

     newUser.save(function (err) {
     if (err) {
     console.log(err);
     res.send(500, {error: "DB error"});
     }
     else{
     res.send({message:'success'});
     }

     }); */
};