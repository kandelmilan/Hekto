const express = require("express");
const { createBanner, getBanner } = require("../controller/Banner.controller");
const upload = require("../utils/multer");
const { checkFile } = require("../middleware/checkFile");

const router = express.Router()

router.get("/", createBanner);

router.post("/", upload.single("image"), checkFile, getBanner);


//garna baki xa yo copy gareko ho sir bata 
router.delete("/:id",
    // authenticateUser, authorizeAdmin,

    deleteBanner
)


router.patch("/:id", upload.single("image"), checkFile,
    // authenticateUser, auhorizeAdmin,
    updateBanner
)

module.exports = router