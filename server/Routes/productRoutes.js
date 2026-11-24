import express from "express"
import { addProducts, getProdById, getProducts } from "../Controllers/productControllers.js"
import authenticate, { authorize } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/add-products", authenticate,authorize("admin"), addProducts)
router.get("/products", getProducts )
router.get("/products/:id", getProdById)


export default router