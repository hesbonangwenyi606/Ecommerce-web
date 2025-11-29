const pool = require('../config/db');

const getAllProducts = async () => {
  const res = await pool.query('SELECT * FROM products');
  return res.rows;
};

const getProductById = async (id) => {
  const res = await pool.query('SELECT * FROM products WHERE id=$1', [id]);
  return res.rows[0];
};

const createProduct = async (product) => {
  const { name, description, price, image_url } = product;
  const res = await pool.query(
    'INSERT INTO products (name, description, price, image_url) VALUES ($1,$2,$3,$4) RETURNING *',
    [name, description, price, image_url]
  );
  return res.rows[0];
};

const updateProduct = async (id, product) => {
  const { name, description, price, image_url } = product;
  const res = await pool.query(
    'UPDATE products SET name=$1, description=$2, price=$3, image_url=$4 WHERE id=$5 RETURNING *',
    [name, description, price, image_url, id]
  );
  return res.rows[0];
};

const deleteProduct = async (id) => {
  await pool.query('DELETE FROM products WHERE id=$1', [id]);
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
