// Import node module for routing
const router = require("express").Router();
// Import local book controller file.
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
// handles both gets and post routes
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
// id is variable to hold book id passed in route
// handles all routing types except post
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
