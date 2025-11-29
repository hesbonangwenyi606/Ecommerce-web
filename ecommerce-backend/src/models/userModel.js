const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = async (name, email, password, isAdmin = false) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const res = await pool.query(
    'INSERT INTO users (name, email, password, is_admin) VALUES ($1,$2,$3,$4) RETURNING *',
    [name, email, hashedPassword, isAdmin]
  );
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  return res.rows[0];
};

module.exports = { createUser, findUserByEmail };
