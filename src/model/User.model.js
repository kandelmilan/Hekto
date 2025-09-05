const { string } = require("joi")
const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    fullname:{
        type:string,
        required:true
    },
    PhoneNumber:{
        type:number
    },
    Age:{
        type:number
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string
    }
})


module.exports={
    UserSchema
}