const BooksModel = require("../models/Books");
const Books = require("../models/Books");

exports.retrieveAll = async (req, res) => {
  try {
    const books = await Books.find({});
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.retrieveOne = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    return res.status(200).json(book.toObject());
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.addBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = new BooksModel(book);
    await newBook.save();
    res.status(201).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author,
      },
    });
    return res.status(204).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    return res.status(204).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
};
