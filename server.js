require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var passport = require('./config/passportConfig');

//model for supply list - this is populated into the database from the seeder file supply.js
var Supply = require('./models/supply');
var User = require('./models/user');

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernJwtAuth');

var auth = require('./routes/auth');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build', 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// Do we still need this?
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});

app.use('/auth', auth);

// Get all supply list data from database, will pass on to supplylist.js component
app.get('/api/supplylist', (req, res) => {
  console.log("You've hit the API to find all supplies");
  // Find all supplies
  Supply.find({}, function(err, supplylist) {
    if (err) {
      console.log("There was a db error");
      res.send(err);
    } else {
      console.log("Got supplylist from DB!")
      // This is the raw array of supply list objects
      res.send(supplylist);
    }
  });
});

//this route returns a 500 error
// app.get('/api/userlist', (req, res) => {
//   console.log("You've hit the API to find all supplies");
//   // Find all supplies
//   User.findOne({ email: req.body.user.email }, {supplies}, function (err, person) {
//     if (err) return (err);
//     console.log('we hit the user findOne route')
//   });
// });

//this route works, but it's not returning useful data
app.get('/api/userlist', (req, res) => {
  console.log("You've hit the API to find all supplies");
  // Find all supplies
  Supply.find({}, function(err, supplylist) {
    if (err) {
      console.log("There was a db error");
      res.send(err);
    } else {
      console.log("Got supplylist from DB!")
      // This is the raw array of supply list objects
      res.send(supplylist);
    }
  });
});



app.post('/addsupplies', (req, res) => {
  console.log("In the add supplies route")
  console.log(req.body.user)
  User.find({email: req.body.user.email}, function(err, user) {
    console.log("THIS SHOULD BE THE USER");
    console.log(user);
    let newSupplies = [];
    console.log("THIS SHOULD BE THE ITEM");
    console.log(req.body.item)
    newSupplies.push(req.body.item);
    console.log(newSupplies);
    console.log(user)
    //
    User.findOneAndUpdate({ email: req.body.user.email}, {supplies: newSupplies}, {upsert: true}, function(err, result) {
      console.log(result)
    })
  })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
