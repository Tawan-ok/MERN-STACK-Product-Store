import Product from "../model/product.model.js";

export const getProdcuts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  };

  export const getProduct = async (req, res) => {
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
  }

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
  const {id} = req.params;
  const product = req.body;

if(!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(400).json({ message: 'Invalid product ID' });
}

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
}

export const deleteProduct =  async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
};


  