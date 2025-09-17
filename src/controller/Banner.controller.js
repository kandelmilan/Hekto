const handlerError = require("../middleware/handelError");
const Banner = require("../model/Banner.model")
const mangoose = require("mongoose")
const Joi = require("joi");
const deleteImage = require("../utils/deleteImage");


const bannerValidationSchema = Joi.object({
    title: Joi.string()
        .trim()
        .required()
        .messages({
            "string.base": "Title must be a required",
            "string.empty": "Title cannot be empty",
        }),
    image: Joi.string()
        .required()
        .messages({
            "string.base": "Image must be a string",
            "string.empty": "Image is required",
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
const createBanner = async (req, res, next) => {
    try {
        const banner = await Banner.create(req.body)
        res.status(201).json({
            status: "success",
            data: banner
        })

    }
    catch (err) {
        if (req.file) {

            deleteImage(req.file.path);
        }
        next(err)

    }
}


const getBanner = async (req, res) => {
    try {
        const banners = await Banner.find()
        res.status(200).json({
            status: "success",
            data: banners
        })
    } catch (err) {
        next(err)
    }
}


// const deleteBanner = (res, req, next) => {
//     try {
//         const { id } = equal.param
//     } catch (err) {
//         next(err)
//     }
// }

module.exports = { createBanner, getBanner };