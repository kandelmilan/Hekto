const Joi = require("joi");




const topCategoryValidation = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required()
        .message({
            "string.empty": "title is required",
            "String.min": "Title must be at least 3 character",
            "string.max": "Title cannot exceed 30 character"
        }),
    price: Joi.number().required(),


});