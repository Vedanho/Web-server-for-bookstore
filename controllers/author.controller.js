const Author = require("../models/Author.model");

module.exports.authorController = {
  addAuthor: (req, res) => {
    Author.create({ name: req.body.name, info: req.body.info })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
  deleteAuthor: (req, res) => {
    Author.findByIdAndRemove(req.params.id)
      .then(() => res.json("Автор удалён"))
      .catch((e) => res.json(e));
  },
};
