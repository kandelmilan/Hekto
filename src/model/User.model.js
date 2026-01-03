const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,

        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["buyer", "seller"],
            default: "buyer"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
