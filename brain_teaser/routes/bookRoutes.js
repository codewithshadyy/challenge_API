
const express = require('express');
const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
} = require('../controllers/bookControllers');

const { protect } = require('../middlewares/authMiddlewares');

// Public
router.get('/', getBooks);
router.get('/:id', getBook);

// Protected
router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;