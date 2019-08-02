// Import node module for routing
const router = require("express").Router();
// Import local google contoller file
const googleController = require("../../controllers/googleController");

// Matches with "/"
// Searches the Google Books API and returns only the entries we haven't already saved.
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
