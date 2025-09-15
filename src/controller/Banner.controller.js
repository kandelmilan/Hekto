const handlerError = require("../middleware/handelError");
const banner = require("../model/Banner.model")
const Joi = require("joi")


const bannerValidationSchema = Joi.object({
    title: Joi.string()
        .trim()
        .required()
        .messages({
            "string.base": "Title must be a required",
            "string.empty": "Title cannot be empty",
        }),
    image: Joi.string()
        .uri()
        .required()
        .messages({
            "string.base": "Image must be a string",
            "string.empty": "Image is required",
            "string.uri": "Image must be a valid URL"
        }),
    description: Joi.string()
        .optional()
        .messages({
            "string.base": "Description must be a string"
        }),
    discount: Joi.number()
        .min(0)
        .optional()
        .messages({
            "number.base": "Discount must be a number",
            "number.min": "Discount cannot be negative"
        }),
    link: Joi.string()
        .uri()
        .optional()
        .messages({
            "string.uri": "Link must be a valid URL"
        }),
    subtitle: Joi.string()
        .optional()
        .messages({
            "string.base": "Subtitle must be a string"
        })
});

const createBanner = async (req, res) => {
    res.status(201).json("Banner created successfully")

}

module.exports = { createBanner };