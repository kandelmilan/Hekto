const mongoose = require("mongoose");
const latestProductModel = require("../model/latestProduct.model");
const Joi = require("joi");

// Joi Validation
const latestProductValidation = Joi.object({
    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters long",
            "string.max": "Title cannot exceed 100 characters"
        }),
    image: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Image is required"
        }),
    price: Joi.number()
        .min(0)
        .required()
        .messages({
            "number.base": "Price must be a number",
            "number.min": "Price cannot be negative",
            "any.required": "Price is required"
        }),
    discountedPrice: Joi.number()
        .min(0)
        .optional()
        .messages({
            "number.base": "Discounted price must be a number",
            "number.min": "Discounted price cannot be negative"
        }),
    userId: Joi.string()
        .custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) return helpers.message("Invalid userId");
            return value;
        })
        .required()
        .messages({
            "any.required": "userId is required"
        })
});

// CREATE
const createLatestProduct = async (req, res, next) => {
    try {
        const { error } = latestProductValidation.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });

        const latestProduct = await latestProductModel.create(req.body);
        res.status(201).json({
            status: "success",
            message: "Latest Product created successfully",
            data: latestProduct
        });
    } catch (err) {
        next(err);
    }
};

// GET ALL
const getLatestProduct = async (req, res, next) => {
    try {
        const latestProducts = await latestProductModel.find();
        if (!latestProducts.length) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({
            status: "success",
            message: "Latest Products fetched successfully",
            data: latestProducts
        });
    } catch (err) {
        next(err);
    }
};

// UPDATE
const updateLatestProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { error } = latestProductValidation.validate(req.body);
        if (error) 
            return res.status(400).json({ message: error.details[0].message });

        const latestProduct = await latestProductModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!latestProduct) 
            return res.status(404).json({ message: "Product not found" });
        

        res.status(200).json({
            status: "success",
            message: "Latest Product updated successfully",
            data: latestProduct
        });
    } catch (err) {
        next(err);
    }
};

// DELETE
const deletelatestProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const latestProduct = await latestProductModel.findByIdAndDelete(id);
        if (!latestProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({
            status: "success",
            message: "Latest Product deleted successfully"
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { createLatestProduct, getLatestProduct, updateLatestProduct, deletelatestProduct };
