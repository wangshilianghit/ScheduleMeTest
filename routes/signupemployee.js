
/*
 * GET home page.
 */
var path = require('path');
var User = require('../models/user.js');

exports.signupemployee = function (req, res) {

    requestASJSON = JSON.parse(JSON.stringify(req.body));
    console.log(requestASJSON);
    email = requestASJSON.email;
    password = requestASJSON.password;
    firstName = requestASJSON.firstName;
    lastName = requestASJSON.lastName;
    accessCode = requestASJSON.accessCode;


    var newUser = new User({email: email, password: password, firstName: firstName, lastName: lastName, accessCode: accessCode, typeAccount: "employee"});

    newUser.save(function (err) {
        if (err) {
            console.log(err);
            res.send(500, {error: "DB error"});
        }

    });


};