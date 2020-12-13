const db = require('../models');
module.exports = {
  findAll: (req, res) => {
    db
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db
      .findById({ id: req.params.id })
      .then(dbModel => dbModel.remove)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};