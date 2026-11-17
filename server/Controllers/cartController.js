import Cart from "../models/cart.js"


export const addToCart= async(req, res)=>{
    try {

        const user = req.user;

        console.log(user);
        

        const {id, price} = req.body

        console.log(id,price);

        // creating a new cart for the user 

        const isCartExist = await Cart.findOne({user:user._id})
        
        if(!isCartExist){
            const cartItem = await Cart.create({user:user._id, items:[{product:id, price:price}], totalPrice:price})
            return res.status(201).json({success:true, message:"item added to new cart", cartItem})
        }

        // adding a new product to the cart

        const isProdExist = isCartExist.items.some((item) => item.product == id )

        if(!isProdExist) {
            isCartExist.items.push({product:id ,price:price })  // push new product to the array of items
            isCartExist.totalPrice  = isCartExist.items.reduce((acc, item)=> acc +(item.price * item.quantity) ,0)
            await isCartExist.save()

            return res.status(200).json({success:true, message:"item added to cart"})
        }

        //updating quantity if the product already exists

        isCartExist.items = isCartExist.items.map((item)=>{
            if (item.product == id){
                item.quantity += 1
            }

            return item
        })

        isCartExist.totalPrice  = isCartExist.items.reduce((acc, item)=> acc +(item.price * item.quantity) ,0)

        await isCartExist.save()

        res.status(200).json({success:true, message:"item added to cart", isCartExist})

        //old static logic

        // const {product, price} = req.body

        // const cartItem = await Cart.create({user:user, items:[{product:product, price:price}], totalPrice:price})

    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export const getUserCart = async(req,res)=>{
    try {
        const user = req.user;
        const userCart = await Cart.findOne({user: user._id}).populate("items.product")
        res.status(200).json({success:true, cart:userCart})
    } catch (error) {
        res.status(500).json({error:error.message, success:false})
    }
}

export const removeFromCart = async(req, res)=>{
    try {
        const {prodId} = req.params

        const userCart = await Cart.findOne({user:req.user._id})

        userCart.items = userCart.items.filter((item)=> item.product != prodId)
        userCart.totalPrice  = userCart.items.reduce((acc, item)=> acc +(item.price * item.quantity) ,0)

        await userCart.save()

        res.status(200).json({success:true, message:"item removed"})

        
    } catch (error) {
        res.status(500).json({error:error.message, success:false})
    }
}

export const updateQty = async(req, res)=>{
    try {
        const {action, prodId} = req.params
        const userCart = await Cart.findOne({user:req.user._id})
        
        userCart.items = userCart.items.map((item)=>{
            if(item.product == prodId){
                if(action === "increment"){
                    item.quantity += 1
                } else {
                    item.quantity -=1
                }
                return item
            }
        })

        userCart.totalPrice = userCart.items.reduce((acc, item)=> acc + (item.price * item.quantity), 0)
        await userCart.save()

        res.status(200).json({success:true, message:"qty updated"})
    } catch (error) {
        res.status(500).json({error:error.message, success:false})       
    }
}