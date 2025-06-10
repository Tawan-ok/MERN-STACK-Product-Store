import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const mongoUri =
  process.env.MONGO_URI ||
  'mongodb://root:example@localhost:27017/productStore?authSource=admin';

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});