const { createOrder, getOrdersByUser } = require('../models/orderModel');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a new order
const addOrder = async (req, res) => {
  try {
    const userId = req.user; // from auth middleware
    const { items, total } = req.body;

    if (!items || !total) {
      return res.status(400).json({ message: 'Items and total are required' });
    }

    const order = await createOrder(userId, items, total);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders for logged-in user
const fetchUserOrders = async (req, res) => {
  try {
    const userId = req.user;
    const orders = await getOrdersByUser(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Stripe checkout session
const createCheckoutSession = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items provided' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price * 100
        },
        quantity: item.quantity
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addOrder,
  fetchUserOrders,
  createCheckoutSession
};
