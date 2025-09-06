const Product = require("../model/Product.model");

// Create a product
const createProduct = async (req, res) => {
    try {
        const { categoryId, title, image, price, discountedPrice, userId } = req.body;
        const product = await Product.create({ categoryId, title, image, price, discountedPrice, userId });
        res.status(201).send({ message: "Product created", product });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("categoryId").populate("userId");
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Get single product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId").populate("userId");
        if (!product) return res.status(404).send({ message: "Product not found" });
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).send({ message: "Product updated", product });
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).send({ message: "Product deleted" });
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
