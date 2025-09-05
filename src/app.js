const express = require("express")
const app=express()
const UserRouter=require("./router/User.router")

app.get("/",(req,res)=>{
    res.status(200).send("Server is Serving")
})

app.use("/api/v1",UserRouter)


module.exports=app