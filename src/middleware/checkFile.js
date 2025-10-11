const checkFile=(req, res, next) => {
    if (req.file) {
        req.body.image = req.file.path
        next()
    } else {
       next()
    }
}
module.exports={checkFile};