const express = require('express');
const path = require('path');
const router = express.Router();
const booksController = require('../controllers/books.controller');

router.get('/home', booksController.get_books);
router.get('/newBook',booksController.get_new);

module.exports = router;