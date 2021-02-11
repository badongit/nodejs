const express = require('express');

const bookController = require('../app/controllers/BookController');

const router = express.Router();

router.delete('/:id/destroy', bookController.destroy);
router.patch('/:id/restore', bookController.restore);
router.delete('/:id', bookController.delete);
router.put('/:id', bookController.update);
router.get('/:id/edit', bookController.edit);
router.post('/store', bookController.store);
router.get('/create', bookController.create);
router.get('/:slug', bookController.show);

module.exports = router;
