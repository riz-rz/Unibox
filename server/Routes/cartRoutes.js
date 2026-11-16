import { addToCart } from "../Controllers/cartController.js"
import express from "express"
import authenticate from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/add-to-cart/:userId",authenticate, addToCart)

export default router