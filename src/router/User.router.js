const express = require("express")
const { login, signup } = require("../controller/User.controller")


const router = express.Router()


router.get("/", (req, res) => {
    res.status(200).send("response from user")
})

router.post("/login", login)
router.post("/signup", signup)

module.exports = router