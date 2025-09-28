const jwt = require("jsonwebtoken")
const isAuthenticated = (req, res, next) => {

    try {
        const token = req.headers?.authorization?.split(" ")[1]
        if (token) {
            const user = jwt.verify(token, process.env.JWT_SECRET)
            if (token && user) {
                req.user = user
                next()
            } else {
                res.status(401).send("Authenticatin Failed")
            }
        } else {
            res.status(401).send("Authenticatin Failed")
        }
    } catch (err) {
        res.status(401).send("Authenticatin Failed")
    }

}

const isAdmin = (req, res, next) => {
    const user = req.user
    if (user.role === "superadmin") {
        next()
    } else {
        res.status(403).send("Forbidden")
    }
}
const isBuyer = () => {
    const user = req.user
    if (user.role === "buyer") {
        next()
    } else {
        res.status(403).send("Forbidden")
    }
}


module.exports = {
    isAuthenticated,
    isAdmin,
    isSeller,
    isBuyer
}