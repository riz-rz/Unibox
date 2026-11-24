import express from "express"
import { addProducts, deleteProduct, getProdById, getProducts, updateProduct } from "../Controllers/productControllers.js"
import authenticate, { authorize } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/products", getProducts)
router.get("/products/:id", getProdById)

// admin only
router.post("/add-products", authenticate, authorize("admin"), addProducts)
router.put("/products/:id", authenticate, authorize("admin"), updateProduct)
router.delete("/products/:id", authenticate, authorize("admin"), deleteProduct)

export default router
