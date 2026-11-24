import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    avatar: String,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    address: {
        fullname: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
})

UserSchema.pre("save", async function () {
    // only hash when the password was changed
    if (!this.isModified("password")) {
        return
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("user", UserSchema)

export default User