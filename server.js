var express = require("express");

var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();
var passport   = require('passport');
var session    = require('express-session');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))
// For passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secrets
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
// Routes
// =============================================================

require("./routes/auth-routes.js")(app,passport);

//load passport strategies
require("./config/passport/passport.js")(passport, db.Auth);


// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/icecreamroutes.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.


  db.sequelize.sync ().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});