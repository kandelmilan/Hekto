const mongoose=require("mongoose")


const BannerSchema=mongoose.Schema({
    image:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    discountPercentage: {
         type: Number
    }
})

module.exports = mongoose.model("Banner", BannerSchema);