import Products from "../models/products.js";


export const addProducts = async(req,res)=>{

    console.log(req.cookies);    
    
    try {
        const Product = req.body
        const newProduct = await Products.create(Product)
        res.status(201).json({success:true, message:"product added successfully", newProduct})
        
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export const getProducts = async(req,res)=>{
    try {
        
        const prods =await Products.find()
        res.status(200).json({success:true, message:"users fetched", prods})
    } catch (error) {
         res.status(500).json({success:false, message:error.message})
    }
}