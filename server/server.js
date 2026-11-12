import express from "express"
import dotenv  from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js"
import productRoutes from "./Routes/productRoutes.js"
import cartRoutes from "./Routes/cartRoutes.js"
import cookieParser from "cookie-parser";


const app = express()


// to convert json data to the og form
app.use(express.json())

// to read the data in cookies
app.use(cookieParser())

dotenv.config()

connectDB()

app.use(authRoutes)
app.use(productRoutes)
app.use(cartRoutes)











app.listen(5000,()=>{
    console.log("server is up and running on 5000....");
    
})