const express = require("express");
const router = express.Router();
const {createBanner} = require("../controller/Banner.controller");


router.post("/banner", createBanner);          
 

module.exports = router;
