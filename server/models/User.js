const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minlength: 3
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: "user",
        },
    },
    {
        timestamps :  true,
    }
);

const User = mongoose.model('User' , userSchema)

module.exports = User