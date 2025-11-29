const pool = require('../config/db');

const createOrder = async (userId, items, total) => {
  const res = await pool.query(
    'INSERT INTO orders (user_id, total) VALUES ($1,$2) RETURNING *',
    [userId, total]
  );
  const order = res.rows[0];

  for (let item of items) {
    await pool.query(
      'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1,$2,$3)',
      [order.id, item.product_id, item.quantity]
    );
  }
  return order;
};

const getOrdersByUser = async (userId) => {
  const res = await pool.query('SELECT * FROM orders WHERE user_id=$1', [userId]);
  return res.rows;
};

module.exports = { createOrder, getOrdersByUser };
