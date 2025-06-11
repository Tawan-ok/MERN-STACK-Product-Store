import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './model/product.model.js';
import mongoose from 'mongoose';

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

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});

app.get("/api/products", async ( res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

  app.put("/api/products/:id", async (req, res) => {
  const {id} = req.params;
  const product = req.body;

if(!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(400).json({ message: 'Invalid product ID' });
}

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
  });
}

export default app;
