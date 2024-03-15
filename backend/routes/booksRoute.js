import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for save a new Book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send(`Please fill all the fields`);
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Route for get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Get one book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Route to update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Please fill all the fields" });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.status(200).send({ message: "Book updated successfully", result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Route for delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default router;
