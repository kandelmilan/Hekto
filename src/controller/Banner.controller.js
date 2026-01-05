const Banner = require("../model/Banner.model");
const Joi = require("joi");
const mongoose = require("mongoose");
const deleteImage = require("../utils/deleteImage");

const bannerValidationSchema = Joi.object({
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
        .required()
        .messages({
            "string.empty": "Image is required"
        }),

    description: Joi.string()
        .trim()
        .max(500)
        .optional(),

    discount: Joi.number()
        .min(0)
        .max(100)
        .optional()
        .messages({
            "number.min": "Discount cannot be negative",
            "number.max": "Discount cannot exceed 100"
        }),

    link: Joi.string()
        .uri({ scheme: ["http", "https"] })
        .optional()
        .messages({
            "string.uri": "Link must be a valid URL"
        }),

    subtitle: Joi.string()
        .trim()
        .max(150)
        .optional()
});


// CREATE BANNER
const createBanner = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const bannerData = {
            ...req.body,
            image: `/uploads/${req.file.filename}`,
            discount: req.body.discount ? Number(req.body.discount) : 0,
        };

        const banner = await Banner.create(bannerData);

        res.status(201).json({
            status: "success",
            data: banner,
        });
    } catch (err) {
        next(err);
    }
};


// GET BANNERS
const getBanner = async (req, res, next) => {
    try {
        const banners = await Banner.find();
        res.status(200).json({
            status: "success",
            data: banners,
        });
    } catch (err) {
        next(err);
    }
};

// DELETE BANNER
const deleteBanner = async (req, res, next) => {
    try {
        const deletedBanner = await Banner.findByIdAndDelete(req.params.id);

        if (!deletedBanner) {
            return res.status(404).json({ message: "Banner not found" });
        }

        res.json({ message: "Banner deleted successfully", banner: deletedBanner });
    } catch (err) {
        next(err);
    }
};



module.exports = { createBanner, getBanner, deleteBanner };
