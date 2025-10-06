const express = require("express");
const { createBanner, getBanner, deleteBanner } = require("../controller/Banner.controller");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

// Get all banners
router.get("/", getBanner);

// Create new banner
router.post("/", upload.single("image"), checkFile, createBanner);

// Update banner by ID
router.patch("/:id", upload.single("image"), checkFile);

// Future: delete banner
router.delete("/:id", isAdmin, deleteBanner);

module.exports = router;
