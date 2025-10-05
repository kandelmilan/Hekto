const express = require("express");
const { createBanner, getBanner } = require("../controller/Banner.controller");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");

const router = express.Router();

// Get all banners
router.get("/", getBanner);

// Create new banner
router.post("/", upload.single("image"), checkFile, createBanner);

// Update banner by ID
router.patch("/:id", upload.single("image"), checkFile);

// Future: delete banner
// router.delete("/:id", authenticateUser, authorizeAdmin, deleteBanner);

module.exports = router;
