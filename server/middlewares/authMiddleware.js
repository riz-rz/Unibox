import jwt, { decode } from 'jsonwebtoken'
import User from '../models/users.js';


const authenticate =(req,res,next)=>{

    const token = req.cookies.token

    console.log(token);
    

    if(!token){
        return res.status(500).json({success:false, message:"User not logged in"})
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    console.log("decoded: ",decoded);

    // const user = await User.find()

    if(!decoded){
        return res.status(401).json({success:false, message:"Invalid token"})
    }

    next()
    
}

export default authenticate
