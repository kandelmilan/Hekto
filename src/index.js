const mongoose = require("mongoose")
const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({ quiet: true })

const port = process.env.PORT
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connection succesful")
    app.listen(port,()=>{
            console.log(`Server is serving at port ${port}`)
    })
}).catch((err)=>{
    console.log("Database connection error")
})


console.log("hello")