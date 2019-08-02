// Import node module for mongo ORM
const mongoose = require("mongoose");
// define database for books
const Schema = mongoose.Schema;
// schema makes non-relational db(Mongo) like a relational db(MySQL)
// Each schema key is a db field and its datatype that will be validated.
// Also some fields are required when creating a document and one field is defined as unique.
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
