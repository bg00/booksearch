//Techonology needed to begin and start app
const express = require("express");
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//For connecting MongoDB
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds061365.mlab.com:61365/heroku_jrkzrdwr"
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/public", "index.html"));
  });
}

// Add routes, both API and view
app.use(routes);

const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
