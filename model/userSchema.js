const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "user name is required"],
        minLength: [5, "Name must be atleast 5 characters"],
        maxLength: [25, "Name must be less than 25 characters"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: [true, "already registered"],
        lowercase: true
    },
    password: {
        type: String,
        select: false
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function(next){
    // If password is already modified then move to next operation else modify the password using bcrypt module.
    if(!this.isModified('password')){ 
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

