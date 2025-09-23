const express = require("express");
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controller/Product.controller");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");
// const { authenticateUser, authorizeAdmin } = require("../middleware/auth");

const router = express.Router();

// ✅ Create Product
router.post("/", upload.single("image"), checkFile,
    // authenticateUser, authorizeAdmin,
    createProduct
);

// ✅ Get All Products
router.get("/", getProducts);

// ✅ Get Single Product by ID
router.get("/:id", getProductById);

// ✅ Update Product
router.patch("/:id", upload.single("image"), checkFile,
    // authenticateUser, authorizeAdmin,
    updateProduct
);

// ✅ Delete Product
router.delete("/:id",
    // authenticateUser, authorizeAdmin,
    deleteProduct
);

module.exports = router;
