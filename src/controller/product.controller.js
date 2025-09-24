const Product = require("../model/Product")
const joi = require("joi")
const productSchema = joi.object({
    category: joi.string().required(),
    productOf: joi.string().required(),
    title: joi.string().required(),
    image: joi.string().required(),
})

const createProduct = async (req, res, next) => {
    try {
        const { error, value } = productSchema.validate(req.body)

        const product = await Product.create(value)
        res.status(201).json({
            status: "success",
            data: product
        })
    } catch (err) {
        if (req.file) {
            deleteImage(req.body.image)
        }
        next(err)


    }
}




module.exports = {
    createProduct
}