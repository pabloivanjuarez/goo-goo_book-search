const router = require('express').Router();
const controller = require('../../controllers/booksController');

router.route('/')
  .get(controller.findAll)
  .put(controller.create);