var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('./app_api/models/db');


const index = require('./app_server/routes/index');
const users = require('./app_server/routes/users');
//const apiRoutes = require('./app_api/routes/index');
const apiRoutesUser = require('./app_api/routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));


app.use('/', index, users, apiRoutesUser);
//app.use('/api', apiRoutesUser);

// error handlers

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

app.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

module.exports = app;

//Reference Github
//https://github.com/onedesign/express-socketio-tutorial/blob/master/README.md
//Reference help from fellow student James Mahoney
