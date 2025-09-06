const express = require("express")
const app=express()
const UserRouter=require("./router/User.router")
const BannerRouter = require("./router/Banner.router");




app.use(express.json());  

app.get("/",(req,res)=>{
    res.status(200).send("Server is Serving")
})

app.use("/api/v1",UserRouter)
app.use("/api/v1", BannerRouter);

module.exports=app