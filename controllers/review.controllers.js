const Review = require("../models/Review.model");

module.exports.reviewControllers = {
  addReview: (req, res) => {
    Review.create({
      text: req.body.text,
      author: req.body.author,
      book: req.body.book,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteReview: (req, res) => {
    Review.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Рецензия удалена");
      })
      .catch((e) => res.json(e));
  },
  getReviewByBook: (req, res) => {
    Review.find({ book: req.params.id }).populate('book')
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
