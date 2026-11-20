import User from "../models/users.js"


export const getAllUsers = async(req , res)=>{
    try {
        const users = await User.find()
        res.status(200).json({success:true, message:"users fetched", users})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}