
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

