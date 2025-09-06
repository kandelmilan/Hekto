const express = require("express");
const { createBanner, getBanners, getBannerById, updateBanner, deleteBanner } = require("../controller/Banner.controller");

const router = express.Router();

router.post("/banner", createBanner);
router.get("/banner", getBanners);
router.get("/banner/:id", getBannerById);
router.patch("/banner/:id", updateBanner);
router.delete("/banner/:id", deleteBanner);

module.exports = router;
