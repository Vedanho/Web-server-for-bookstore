const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => res.json("Книга удалена"))
      .catch((e) => {
        res.json(e);
      });
  },
  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      genre: req.body.genre,
      author: req.body.author,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .populate("genre")
      .populate("author")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllBooks: (req, res) => {
    Book.find()
      .populate("genre")
      .populate("author")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getBooksByGenre: (req, res) => {
    Book.find({ genre: req.params.id })
      .populate("genre").populate('author')
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
