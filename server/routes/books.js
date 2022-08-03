const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");

router.get("/", booksController.retrieveAll);
router.get("/:id", booksController.retrieveOne);
router.post("/", booksController.addBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
