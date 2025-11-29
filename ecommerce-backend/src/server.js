const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool
const pool = new Pool({
  user: process.env.DB_USER,       // e.g., 'hesbon'
  host: process.env.DB_HOST,       // e.g., 'localhost'
  database: process.env.DB_NAME,   // e.g., 'ecommerce'
  password: process.env.DB_PASSWORD, // e.g., 'He150040500'
  port: process.env.DB_PORT || 5432,
});

// Test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Backend is working!', time: result.rows[0].now });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Example: Get all users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
