const express=require("express")


const router=express.Router()

router.get("/user",(req,res)=>{
    res.status(200).send("response from user")
})

router.post("/user/login",(req,res)=>{
    res.status(200).send("response from login")
})
router.post("/user/signup",(req,res)=>{
    res.status(200).send("response from signup")
})

module.exports=router