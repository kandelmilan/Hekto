const express=require("express")

const router=express.Router()

router.get("/", (req, res) => {
    res.send("All banners");
});

router.post("/", (req, res) => {
    res.send("Create banner");
});

module.exports=router