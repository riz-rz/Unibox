import { addToCart, getUserCart, removeFromCart, updateQty,  } from "../Controllers/cartController.js"
import express from "express"
import authenticate from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/add-to-cart",authenticate, addToCart)
router.get("/cart",authenticate, getUserCart)
router.delete("/cart/:prodId",authenticate, removeFromCart)
router.put("/cart/:prodId/:action",authenticate,updateQty )

export default router