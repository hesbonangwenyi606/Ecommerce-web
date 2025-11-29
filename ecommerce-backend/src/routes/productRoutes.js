const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
  fetchProducts, 
  fetchProductById, 
  addProduct, 
  editProduct, 
  removeProduct 
} = require('../controllers/productController');

// Public
router.get('/', fetchProducts);
router.get('/:id', fetchProductById);

// Admin routes
router.post('/', protect, addProduct);
router.put('/:id', protect, editProduct);
router.delete('/:id', protect, removeProduct);

module.exports = router;
