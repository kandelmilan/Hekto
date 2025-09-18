const express = require("express")
const { login, signup } = require("../controller/User.controller")


const router = express.Router()


router.get("/", (req, res) => {
    res.status(200).send("response from user")
})

router.post("/login", login)
router.post("/signup", signup)


router.route('/:id')
    .get((req, res) => {
        res.send(`User id is ${req.params.id}`)
    })
    .patch((req, res) => {
        res.send(`User id is ${req.params.id} and updated`)
    })
    .delete((req, res) => {
        res.send(`User id is ${req.params.id} and deleted`)
    })

module.exports = router