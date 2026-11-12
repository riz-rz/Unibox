import Cart from "../models/cart.js"


export const addToCart= async(req, res)=>{
    try {
        const user = req.params.userId

        const {product, price} = req.body

        const cartItem = await Cart.create({user:user, items:[{product:product, price:price}], totalPrice:price})

    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}