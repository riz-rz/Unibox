import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProdCard = ({product, }) => {
    // console.log(product);

    const navigate = useNavigate()

    
    
  return (
    <div onClick={()=> navigate(`/products/${product._id}`)} className='border-3 shadow-[3px_3px_0px_#000] bg-white h-150 rounded-xl p-5 flex flex-col gap-4 cursor-pointer hover:scale-101'>
        <div className='bg-[#ffd5009e] min-h-[50%] rounded-xl '>
            <img src={product.images[0] } alt={product.productName} className='w-full h-full object-cover rounded-xl' />
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-stone-500'>{product.category}</p>
            <h1 className='text-xl'>{product.productName}</h1>
            <h1 className='text-sm text-stone-600'>{product.description}</h1>
        </div>
        <div className='flex justify-between items-center '>
            <p className='text-xl'> ₹ {product.price}</p>
            <button className='border-2  px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400] hover:-rotate-4'>
                     Add to Box
            </button>
        </div>
    </div>
  )
}

export default ProdCard