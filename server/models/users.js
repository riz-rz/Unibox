import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    avatar:String,
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    address:{
        fullname:String,
        phone:String,
        street:String,
        city:String,
        state:String,
        pincode:String,
        country:String
    },
    isVerified:Boolean,
    isBlocked:Boolean
})

UserSchema.pre("save",async function(){


    if(!this.isModified("password")){
        return                                // so the remaining code will only work if the password is not modified 
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("user", UserSchema)

export default User