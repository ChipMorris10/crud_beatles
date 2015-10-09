// *** main dependencies *** //
var dotenv = require('dotenv');
dotenv.load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');

// *** routes *** //
var routes = require('./routes/index.js');
var songs = require('./routes/api.js');
// var user = require('./routes/userAII.js');


// *** express instance *** //
var app = express();


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
///view engine
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, '../client/views'));
app.get('/songEntry',function(req,res){
  res.sendFile(path.join(__dirname,'../client/views','song_entry.html'));
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../client/views','index.html'));
});


// *** main routes *** //
// app.use('/', routes);
app.use('/api/', songs);
// app.post('/api/songs', services.postSong);
// app.use('/auth', user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
