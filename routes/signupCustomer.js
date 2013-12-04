
/*
 * GET home page.
 */
var path = require('path');
var User = require('../models/user.js');

exports.signupcustomer = function (req, res) {

    requestASJSON = JSON.parse(JSON.stringify(req.body));
    console.log(requestASJSON);
    business = requestASJSON.business;
    email = requestASJSON.email;
    password = requestASJSON.password;
    firstName = requestASJSON.firstName;
    lastName = requestASJSON.lastName;


    var newUser = new User({business: business, email: email, password: password, firstName: firstName, lastName: lastName, typeAccount: "business"});

    newUser.save(function (err) {
        if (err) {
            console.log(err);
            res.send(500, {error: "DB error"});
        }
        else{
            res.send({message:'success'});
        }

    });
};