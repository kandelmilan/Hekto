const Product = require("../model/Product.model");
const Joi = require("joi");


const productValidationSchema = Joi.object({
    // categoryId: Joi.string().required(),
    userId: Joi.string().required(),
    title: Joi.string().required(),
    price: Joi.number().required(),
    discountedPrice: Joi.number().optional(),
    image: Joi.string().required()
});


const createProduct = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        } 

        const { error, value } = productValidationSchema.validate({
            ...req.body,
            image: req.file.path
        });

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const product = await Product.create(value);

        res.status(201).json({
            status: "success",
            data: product
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
}

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