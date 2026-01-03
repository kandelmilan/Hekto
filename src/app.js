const express = require("express")
const app = express()
const router = require("./router/index")
const handlerError = require("./middleware/handelError")
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).send("Server is Serving ")
})

app.use("/api/v1", router)
app.use(handlerError)
module.exports = app