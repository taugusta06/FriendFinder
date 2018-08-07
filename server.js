// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require("express");
var bodyParser = require("body-parser");
// ==============================================================================
// EXPRESS CONFIGURATION

// creates the "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// Request for data from table
app.post("/api/friends", function (req, res) {
  var userData = req.body;
  console.log("userData = " + JSON.stringify(userData));
  var userResponses = userData.scores;
  console.log("userResponses = " + userResponses);

  // Compute best friend match
  var matchName = "";
  var matchImage = "";
  // loop through friends list
  for (var i = 0; i < friends.length; i++) {
    console.log("friend = " + JSON.stringify(friends[i]));

    // loop through user scores and compare
    var scoreDiff = 0;
    for (var j = 0; j < userResponses.length; j++) {
      scoreDiff += Math.abs(friends[i].scores[j] - userResponses[j]);
    };
  }
});




// =============================================================================
// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
