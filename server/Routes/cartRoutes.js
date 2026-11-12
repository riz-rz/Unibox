import { addToCart } from "../Controllers/cartController.js"
import express from "express"


const router = express.Router()

router.post("/add-to-cart/:userId", addToCart)

export default router