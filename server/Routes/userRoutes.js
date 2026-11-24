import express from "express"
import { getAllUsers } from "../Controllers/userController.js"
import authenticate, { authorize } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/admin/users", authenticate, authorize("admin"), getAllUsers)

export default router
