const Product = require("../model/Product");
const Joi = require("joi");
const deleteImage = require("../utils/deleteImage");


const productSchema = Joi.object({
    category: Joi.string().required(),
    productOf: Joi.string().required(),
    title: Joi.string().required(),
    image: Joi.string().required(),
});

const createProduct = async (req, res, next) => {
    try {
        const { error, value } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const product = await Product.create(value);
        res.status(201).json({
            status: "success",
            data: product
        });
    } catch (err) {
        if (req.file) {
            deleteImage(req.file.path);
        }
        next(err);
    }
};

const getProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        if (!products.length) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (err) {
        next(err);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            status: "success",
            message: "Product updated successfully",
            data: product
        });
    } catch (err) {
        next(err);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            status: "success",
            message: "Product deleted successfully"
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};
