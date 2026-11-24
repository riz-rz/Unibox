import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"
import useAuth from '../context/useAuth';


const ProdCard = ({product}) => {
    // console.log(product.images[0]);
    // console.log("data received at product card", product);

    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    const handleCart =async(id, price)=>{

        // Enforce login requirement before adding to cart
        if (!isAuthenticated) {
            toast.error("Please login to add items to your cart");
            navigate("/login", { state: { from: location } });
            return;
        }


       try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/add-to-cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ id, price })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast.success(data.message || "Added to cart!");
            } else {
                toast.error(data.message || "Could not add item to cart");
            }
        } catch (error) {
            console.error("Cart error:", error);
            toast.error("Failed to add to cart");
        }
        
    }

  return (
    <div
    //  onClick={()=> navigate(`/products/${product._id}`)} 
     className='border-3 shadow-[3px_3px_0px_#000] bg-white h-150 rounded-xl p-5 flex flex-col gap-4 cursor-pointer hover:scale-101'>
        <div className='bg-[#ffd5009e] min-h-[50%] rounded-xl '>
            <img src={product.images[0]} alt={product.productName} className='w-full h-full object-cover rounded-xl' />
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-stone-500'>{product.category}</p>
            <h1 className='text-xl'>{product.productName}</h1>
            <h1 className='text-sm text-stone-600'>{product.description}</h1>
        </div>
        <div className='flex justify-between items-center '>
            <p className='text-xl'> ₹ {product.price}</p>
            <button onClick={()=> handleCart(product._id, product.price)} className='border-2  px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400] hover:-rotate-4'>
                     Add to Box
            </button>
        </div>
    </div>
  )
}

export default ProdCard