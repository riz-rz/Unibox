import User from "../models/users.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register =async(req,res)=>{
    try {
        const user = req.body
        const newUser = await User.create(user)

        res.status(201).json({success:true, message:"registration successfull", newUser})

    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body
        const isExist = await User.findOne({email:email});

        if(!isExist){
            return res.status(404).json({success:false, message:"User doesnt exist"})
        }
        const auth = await bcrypt.compare(password, isExist.password)
        if(!auth){
            return res.status(401).json({message:"Incorrect Password", success:false})
        }

        // JWT LOGIC

        const token = jwt.sign({ id:isExist._id, email:isExist.email, role:isExist.role}, process.env.JWT_SECRET,
            {expiresIn:"1hr"}
        )

        console.log(token);

        res.cookie("token", token, {maxAge: 60 * 60 * 1000})
        
        
        res.status(200).json({success:true,message:"Login Successfull"})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}