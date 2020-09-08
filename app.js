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

const app = express();
app.use(bodyParser.json())
dotenv.config();
const port = process.env.PORT || "8000";

 /**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Telling the app to use the public folder to serve our files is a nice and clean way to manage our site assets
app.use(express.static(path.join(__dirname, 'public')));

 /**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});


/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});