
/*
 * GET home page.
 */
var path = require('path');
var User = require('../models/user.js');

exports.signupbusiness = function (req, res) {
    requestASJSON = JSON.parse(JSON.stringify(req.body));
    console.log(requestASJSON);
    email = requestASJSON.email;
    password = requestASJSON.password;
    firstName = requestASJSON.firstName;
    lastName = requestASJSON.lastName;

    <!-- Should this have typeAccount: "customer"? -->
    var newUser = new User({email: email, password: password, firstName: firstName, lastName: lastName});

    newUser.save(function (err) {
        if (err) {
            console.log(err);
            res.send(500, {error: "DB error"});
        }

    });
};