const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addOrder, fetchUserOrders, createCheckoutSession } = require('../controllers/orderController');

// Protected routes
router.post('/', protect, addOrder);
router.get('/', protect, fetchUserOrders);
router.post('/checkout', protect, createCheckoutSession);

module.exports = router;
