import React, { useEffect, useState } from 'react'

const Cart = () => {

  const [cart , setCart] = useState({})

  const fetchCart = async ()=>{
    try {
      const res = await fetch("http://localhost:5000/cart", {credentials:"include"})
      const data = await res.json()
      console.log(data);
      setCart(data.cart)
      
    } catch (error) {
      console.log("error on front-end cart:", error.message);
      
    }
  }

  const RemoveFromCart =async(prodId)=>{
    try {
      const res = await fetch(`http://localhost:500/cart/${prodId}`, {method:"DELETE", credentials:"include"})
      const data = await res.json()
      console.log(data);
      fetchCart()
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchCart()
  }, [])



  return (
    <div className='min-h-screen bg-[#faf9f6] px-5 md:px-20 py-10'>

      {/* Header */}
      <div className='flex justify-between items-end border-b-2 border-black pb-5 mb-10'>
        <div>
          <h1 className='text-4xl font-bold'>Your Box.</h1>
        </div>
        <p className='text-gray-500 font-medium'>You have {cart?.items?.length} Items in your cart</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

        {/* Cart Items */}
        <div className='lg:col-span-2 space-y-5'>

          {/* Product Card */}
          
          {
            cart?.items?.map((item)=>{
                return(
                      <div key={item._id} className='bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row gap-5'>
                      
                    <div className='w-full sm:w-36 h-40 bg-gray-100 border-2 border-black rounded-lg'>
                      <img src={item.product.images[0]} alt={item.product.productName} className='h-full w-full rounded'/>
                    </div>

                    <div className='flex-1 flex flex-col justify-between'>
                      <div className='flex justify-between'>
                        <div>
                          <h2 className='text-xl font-bold mt-1'>{item.product.productName}</h2>
                          <p className='font-semibold mt-2'>₹{item.price.toLocaleString("en-IN")}</p>
                        </div>

                        <button onClick={()=> RemoveFromCart(item.product._id)} className='text-white bg-red-600 h-fit p-2 border-black border-2 shadow-[3px_3px_0px_#000] cursor-pointer rounded-xl font-semibold text-sm'>
                          Remove
                        </button>
                      </div>

                      <div className='flex justify-between items-center mt-5'>
                        <div className='flex items-center border-2 border-black rounded-lg'>
                          <button className='px-3 py-1 font-bold'>-</button>
                          <span className='px-4 py-1 border-x-2 border-black font-bold'>1</span>
                          <button className='px-3 py-1 font-bold'>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
          }

        </div>

        {/* Order Summary */}
        <div className='h-fit bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-xl p-6'>

          <h2 className='text-2xl font-bold border-b-2 border-black pb-4'>
            Order Summary
          </h2>

          <div className='space-y-5 py-6'>

            <div className='flex justify-between text-gray-600'>
              <span>Subtotal</span>
              <span className='font-bold text-black'>₹ {cart?.items?.reduce((total, item)=> total +(item.price * item.quantity) ,0)}</span>
            </div>

            <div className='flex justify-between text-gray-600'>
              <span>Shipping</span>
              <span className='font-bold text-[green]'>Free</span>
            </div>

            <div className='border-t-2 border-dashed border-gray-300 pt-5 flex justify-between'>
              <span className='font-bold text-lg'>Total</span>
              <span className='font-bold text-2xl'>₹ {cart.totalPrice?.toLocaleString("en-IN") ||
                cart?.items?.reduce((tot, item) => tot + item.price * item.quantity , 0)
                }</span>
            </div>

          </div>

          <div className='bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mb-5'>
            <p className='text-sm font-medium text-orange-800'>
              Free shipping on all orders!
            </p>
          </div>

          <button className='w-full bg-[#FFD400]  py-4 rounded-lg border-2 border-black font-bold text-lg shadow-[3px_3px_0px_#000] hover:translate-y-1 hover:shadow-none transition'>
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
