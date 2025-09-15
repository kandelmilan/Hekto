const express = require("express")
// const { path } = require('../app');
const router = express.Router()
const userRouter = require("./User.router")
const bannerRouter = require("./banner.router")

const routers = [
    {
        path: "/user",
        route: userRouter,
    },
    {
        path: "/banner",
        route: bannerRouter
    }
]

routers.map((route) => {
    router.use(route.path, route.route)
})

module.exports = router  
