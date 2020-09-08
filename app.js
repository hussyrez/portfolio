const express = require("express");
const path = require("path");
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


/**
 * Required External Modules
 */

/**
 * App Variables
 */

dotenv.config();
const port = process.env.PORT || "8000";

const app = express();
app.use(bodyParser.json())

var routes = require('./routes/index');
app.use('/', routes);

app.use(favicon(__dirname + '/public/images/fav_icon.png'));
app.use(logger('dev'));

 /**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Telling the app to use the public folder to serve our files is a nice and clean way to manage our site assets
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
// this matches all routes and all methods
app.use(function(req, res, next) {
  var err = new Error('Sorry, the requested page is Not Found.');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) { 
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development' ? err : {}) // no stacktraces leaked to user
  });
});
/**
 * Routes Definitions
 */

// app.get("/", (req, res) => {
//   res.render("index", { title: "Home" });
// });


/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});