const Banner = require("../model/Banner.model");

// Create banner
const createBanner = async (req, res) => {
    try {
        const { image, title, description, productLink, discountPercentage } = req.body;

        const banner = await Banner.create({ image, title, description, productLink, discountPercentage });

        res.status(201).send({ message: "Banner created", banner });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Get all banners
const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.status(200).send(banners);
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Get banner by ID
const getBannerById = async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) return res.status(404).json({ message: "Banner not found" });
        res.status(200).send(banner);
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Update banner
const updateBanner = async (req, res) => {
    try {
        const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!banner) return res.status(404).json({ message: "Banner not found" });
        res.status(200).send({ message: "Banner updated", banner });
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

// Delete banner
const deleteBanner = async (req, res) => {
    try {
        const banner = await Banner.findByIdAndDelete(req.params.id);
        if (!banner) return res.status(404).json({ message: "Banner not found" });
        res.status(200).send({ message: "Banner deleted" });
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message });
    }
};

module.exports = { createBanner, getBanners, getBannerById, updateBanner, deleteBanner}