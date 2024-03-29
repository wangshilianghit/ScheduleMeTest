// Express provides us with a server
var express = require('express');
// Define where the controller for the login and signup are
var routes = require('./routes');
var signup = require('./routes/signup.js');
var generatetoken = require('./routes/generatetoken.js');
var api = require('./routes/api');
var test = require('./routes/test.js');
// For HTTP server
var http = require('http');
// Parses the path
var path = require('path');
// MongoDB schema definitions
var mongoose = require('mongoose');
// Passport allows us to get login info from places like Facebook
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// Import models
var User = require('./models/user.js');
var Business = require('./models/business.js');
var Employee = require('./models/employee.js');

// Declares the server (creates a server called 'app')
var app = express();

// Specifies the location of the database, and whether it's development or production
var dbLocation;

// Development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    dbLocation = 'mongodb://localhost/test';
}
if ('production' == app.get('env')) {
    dbLocation = 'mongodb://groupawesome:group8@paulo.mongohq.com:10063/app19077050';
}
// Set the server to use the following parameters
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');


// Sets express middleware parameters and functions
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'secretnumber1' }));
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Sets the passport local strategy (i.e., if you are not using a social login)
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {

        User.findOne({email: email}, function (err, user) {

            if (err) {
                return done(err);
            }

            if (user && user.authenticate(password)) {
                return done(null, user);
            }

            else {

                return done(null, false, {message: 'Please check password and email'});

            }
        });
    }
));

// Manage sessions for users once they have logged on/off
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Must be called after passport middleware
app.use(app.router);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// Establishes a database connection
mongoose.connect(dbLocation);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Database connection made");
});

// valid get routes

//index route for main page
app.get('/', routes.index);
app.get('/api/employees/:id', api.employees);
app.get('/api/appointments/:id', api.appointments);
app.get('/api/business/:id', api.business);

//For testing
app.get('/test.html', test.test);

// valid post routes

// signup route for customer, adds a customer to the database
app.post('/signup_customer', signup.signupcustomer);

// signup route for employee, adds an employee to the database
app.post('/signup_employee', signup.signupemployee);

// signup route for a business, adds a business to the database
app.post('/signup_business', signup.signupbusiness);

// Generate token for employee
app.post('/generate_tokens', generatetoken.generatetoken);

// Add an appointment
app.post('/add_appointment', api.addappointment);

// Authenticate local passport using our local strategy
app.post('/login', passport.authenticate('local'), function (req, res) {
    //REMOVE passwords etc. !!!!!!!!!!!!!!
    User.findOne({email:req.user.email}, function(err,user){
        if(err){
            res.send(404, {error: "DB error"});
        }
        else if(user){
            console.log(user);
            res.send(JSON.stringify(user));
        }

    });

});
// logout the current user
app.get('/logout', function(req, res){
    req.logout();
    res.send({message:'logout success'});
});

// Instantiate the HTTP Express server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



