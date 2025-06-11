import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './model/product.model.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/api/products', async (req, res) => {
  const product = req.body; 

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on port 5000');
});