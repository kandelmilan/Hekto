const { default: mongoose } = require("mongoose")
const Category = require("../model/category")

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(201).json({
            status: "success",
            data: category
        })
    } catch (err) {
        next(err)
    }

}

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            status: "success",

            data: categories
        })
    } catch (err) {
        next(err)
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const { id } = mongoose.Types.ObjectId(req.params.id)

        const category = await Category.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            data: category
        })
    } catch (err) {
        next(err)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const { id } = mongoose.Types.ObjectId(req.params.id)

        const category = await Category.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            message: "Category deleted successfully"
        })
    } catch (err) {
        next(err)
    }
}

const getCategoryById = async (req, res, next) => {
    try {
        const { id } = mongoose.Types.ObjectId(req.params.id)
        const category = await Category.findById(id)
        res.status(200).json({  
            status: "success",
            data: category
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getCategoryById
}
