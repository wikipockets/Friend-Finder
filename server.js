// Required packages
var express = require("express");
var path = require("path");
var nodemon = require("nodemon");

// Start the app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());
// need this to use images & css
app.use(express.static(path.join(__dirname, './app/public')));


// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start the server
app.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});