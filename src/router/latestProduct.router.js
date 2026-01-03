const express = require("express");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");
const { isAdmin } = require("../middleware/auth");
const { createLatestProduct, updateLatestProduct, getLatestProduct, deletelatestProduct } = require("../controller/latestProduct.controller");

const router = express.Router();

// Get all latest products
router.get("/", getLatestProduct);

// Create new latest product
router.post("/", upload.single("image"), checkFile, createLatestProduct);

// Update latest product by ID
router.patch("/:id", upload.single("image"), checkFile, updateLatestProduct);

//deleten latest product by ID
router.delete("/:id", upload.single("image"), deletelatestProduct);


module.exports = router;
