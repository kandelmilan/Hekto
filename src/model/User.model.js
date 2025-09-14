const { string } = require("joi")
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullname: { 
        type: String,
         required: true 
        },
    PhoneNumber: { 
        type: Number 
    },
    age: { 
        type: Number
     },
    email: { 
        type: String, 
        required: true
     },
    password: { 
        type: String 
    }
});



module.exports = mongoose.model("User", UserSchema);