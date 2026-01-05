const express = require("express")
// const { path } = require('../app');
const router = express.Router()
const userRouter = require("./User.router")
const bannerRouter = require("./banner.router")
const latestProdcutRoute = require("./latestProduct.router")
const product = require("./product.router")
const topProduct = require("./topCategory.router")

const routers = [
    {
        path: "/user",
        route: userRouter,
    },
    {
        path: "/banner",
        route: bannerRouter
    },
    {
        path: "/latestProduct",
        route: latestProdcutRoute
    },
    {
        path: "/product",
        route: product
    },
    {
        path: "/topCategory",
        route: topCategory
    }
]

routers.map((route) => {
    router.use(route.path, route.route)
})

module.exports = router  
