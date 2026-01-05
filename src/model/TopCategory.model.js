const { default: mongoose } = require("mongoose");


const topCategorySchema = new mongoose.Shcema({

    title:{
        type:string,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    product:{
         type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }

});
module.exports=mongoose.model("topCategory",topCategorySchema);