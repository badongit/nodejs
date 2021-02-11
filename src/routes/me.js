const express = require('express');

const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/trash/books', meController.trashBooks);
router.get('/stored/books', meController.storedBooks);

module.exports = router;
