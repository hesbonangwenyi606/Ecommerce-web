const { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../models/productModel');

// Get all products
const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product by ID
const fetchProductById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new product (admin only)
const addProduct = async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;
    const product = await createProduct({ name, description, price, image_url });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product (admin only)
const editProduct = async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;
    const product = await updateProduct(req.params.id, { name, description, price, image_url });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product (admin only)
const removeProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchProducts,
  fetchProductById,
  addProduct,
  editProduct,
  removeProduct
};
