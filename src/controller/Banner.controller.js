const Banner = require("../model/Banner.model");


const createBanner = async (req, res) => {
    try {
        const { image, title, description, discountPercentage } = req.body;

        const banner = await Banner.create({ image, title, description, discountPercentage });

        res.status(201).json({ message: "Banner created", banner });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
};

module.exports = { createBanner};
