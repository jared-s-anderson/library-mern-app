const mongoose = require("mongoose");
const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    requred: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const BooksModel = mongoose.model("books", BooksSchema);
module.exports = BooksModel;
