const express = require("express")
const { login, signup } = require("../controller/User.controller")


const router = express.Router()

router.get("/user", (req, res) => {
    res.status(200).send("response from user")
})

router.post("/user/login", login)
router.post("/user/signup", signup)

module.exports = router