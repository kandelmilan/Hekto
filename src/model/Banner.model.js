const { link } = require("joi");
const mongoose=require("mongoose")


const BannerSchema=mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    discount: {
         type: Number
    },
    link:{
        type:String
    },
    subtitle:{
        type:String
    }
})

module.exports = mongoose.model("Banner", BannerSchema);