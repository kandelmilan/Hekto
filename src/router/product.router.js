const express = require("express");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");
const { createProduct, getProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
// const { authenticateUser, authorizeAdmin } = require("../middleware/auth");

const router = express.Router();

// Create Product
router.post("/", upload.single("image"), checkFile, createProduct);

// Get All Products
router.get("/", getProduct);

// Update Product
router.patch("/:id", upload.single("image"), checkFile, updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;
