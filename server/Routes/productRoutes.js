import express from "express"
import { addProducts } from "../Controllers/productControllers.js"
import authenticate from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/add-products", authenticate, addProducts)


export default router