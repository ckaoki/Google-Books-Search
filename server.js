
// Import node package modules. 
// "express" is node framework. 
// "mongoose" is ODM/ORM library for mongo databases
const express = require("express");
const mongoose = require("mongoose");
// Import routes folder which will run index.js in that folder.
const routes = require("./routes");

// Create new express app
const app = express();
// Configure port depending if on remote host or localhost
// Process.env variable will be populated at runtime with the state of the system environment.
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests. This is express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB. Read process.env first to see if on remote host, if not use local host mongodb
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBook",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
