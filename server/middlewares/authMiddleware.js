import jwt, { decode } from 'jsonwebtoken'


const authenticate =(req,res,next)=>{

    const token = req.cookies.token

    console.log(token);
    

    if(!token){
        return res.status(500).json({success:false, message:"User not logged in"})
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    console.log(decoded);

    if(!decoded){
        return res.status(401).json({success:false, message:"Invalid token"})
    }

    next()
    
}

export default authenticate
