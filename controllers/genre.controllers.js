const Genre = require("../models/Genre.model");

module.exports.genreControllers = {
  addGenre: (req, res) => {
    Genre.create({ name: req.body.name, description: req.body.description })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json('Жанр удалён');
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllGenre: (req, res) => {
      Genre.find()
      .then((data) => {
          res.json(data)
      })
      .catch((e) => {
          res.json(e)
      })
  }
};
