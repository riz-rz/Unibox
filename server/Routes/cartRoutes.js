import { addToCart, getUserCart, removeFromCart,  } from "../Controllers/cartController.js"
import express from "express"
import authenticate from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/add-to-cart",authenticate, addToCart)
router.get("/cart",authenticate, getUserCart)
router.delete("/cart/:prodId",authenticate, removeFromCart)

export default router