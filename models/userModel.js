const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: [true, "Provide a username"]
        },
        email: {
            type: String,
            required: [true, "Provide an email"],
            unique: [true, "Email is already taken"]            
        },
        password: {
            type: String,
            required: [true, "Provide a password"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);