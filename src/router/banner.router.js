const express = require("express");
const { createBanner } = require("../controller/Banner.controller");

const router = express.Router()

router.get("/", createBanner);

router.post("/", (req, res) => {
    res.send("Create banner");
});

module.exports = router