
import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {

    const { name, category, price, rating, freshness, image } = req.body;

    const product = new Product({
      name,
      category,
      price,
      rating,
      freshness,
      image
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};


export const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({ message: "Server Error" });

  }

};
export const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};

export const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.category = req.body.category || product.category;
    product.price = req.body.price || product.price;
    product.rating = req.body.rating || product.rating;
    product.freshness = req.body.freshness || product.freshness;
    product.image = req.body.image || product.image;
    product.stock = req.body.stock ?? product.stock;
    const updatedProduct = await product.save();

    res.json(updatedProduct);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};



export const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};