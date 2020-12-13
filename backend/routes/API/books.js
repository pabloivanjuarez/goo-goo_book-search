const router = require('express').Router();
const controller = require('../../controllers/booksController');

router.route('/')
  .get(controller.findAll)
  .put(controller.create);

router.route('/:id')
  .get(controller.findById)
  .delete(controller.remove);
