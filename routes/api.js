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
