
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Cart = () => {

  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch Cart
  const fetchCart = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`, { credentials: "include" });
        const data = await res.json();
        if (data.success) {
            setCart(data.cart || { items: [], totalPrice: 0 });
        }
    } catch (error) {
        console.error("Cart fetch error:", error);
    } finally {
        setLoading(false);
    }
  }

  // Remove Product From Cart
  const RemoveFromCart = async (prodId) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/cart/${prodId}`, {
            method: "DELETE",
            credentials: "include"
        });
        const data = await res.json();
        if (data.success) {
            toast.success("Item removed from cart");
            fetchCart();
        } else {
            toast.error(data.message || "Failed to remove item");
        }
    } catch (error) {
        console.error(error);
        toast.error("Error removing item");
    }
  }

  // Update Product Quantity
  const handleQtyUpdation = async (prodId, action) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/cart/${prodId}/${action}`,
        {
          method: "PUT",
          credentials: "include"
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Failed to update quantity")
      }

      fetchCart()

    } catch (error) {
      console.log(error)
      toast.error(error.message || "Something went wrong")
    }
  }

  // Fetch Cart On Component Mount
  useEffect(() => {
    fetchCart()
  }, [])

  // Calculate Subtotal
  const subtotal = cart?.items?.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  ) || 0

  // Total Price
  const total = cart?.totalPrice ?? subtotal

  return (
    <div className='min-h-screen bg-[rgb(255,248,220)] px-5 md:px-20 py-10'>

      {/* Header */}
      <div className='flex justify-between items-end border-b-2 border-black pb-5 mb-10'>
        <div>
          <h1 className='text-xl md:text-4xl font-bold'>Your Box.</h1>
        </div>

        <p className='text-gray-500 text-lg md:font-medium'>
          You have {cart?.items?.length || 0} Items in your cart
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

        {/* Cart Items */}
        <div className='lg:col-span-2 space-y-5'>

          {loading ? (

            <div className='bg-white border-2 border-black rounded-xl p-10 text-center'>
              <p className='text-xl font-semibold'>Loading your cart...</p>
            </div>

          ) : cart?.items?.length === 0 ? (

            <div className='bg-white border-2 border-black rounded-xl p-10 text-center shadow-[3px_3px_0px_#000]'>
              <h2 className='text-2xl font-bold'>
                Your cart is empty!
              </h2>

              <p className='text-gray-500 mt-2'>
                Add some products to get started.
              </p>
            </div>

          ) : (

            cart.items.map((item) => (

              <div
                key={item._id}
                className='bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row gap-5'
              >

                {/* Product Image */}
                <div className='w-full sm:w-36 h-40 bg-gray-100 border-2 border-black rounded-lg'>
                  <img
                    src={item.product?.images?.[0] || "/placeholder.png"}
                    alt={item.product?.productName || "Product"}
                    className='h-full w-full rounded object-cover'
                  />
                </div>

                {/* Product Details */}
                <div className='flex-1 flex flex-col justify-between'>

                  <div className='flex justify-between gap-3'>

                    <div>
                      <h2 className='text-xl font-bold mt-1'>
                        {item.product?.productName || "Product unavailable"}
                      </h2>

                      <p className='font-semibold mt-2'>
                        ₹{(item.price || 0).toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => RemoveFromCart(item.product?._id)}
                      className='text-white bg-red-600 h-fit p-2 border-black border-2 shadow-[3px_3px_0px_#000] cursor-pointer rounded-xl font-semibold text-sm'
                    >
                      Remove
                    </button>

                  </div>

                  {/* Quantity Controls */}
                  <div className='flex justify-between items-center mt-5'>

                    <div className='flex items-center border-2 border-black rounded-lg'>

                      <button
                        onClick={() => handleQtyUpdation(item.product?._id, "decrement")}
                        disabled={item.quantity <= 1}
                        className='px-3 py-1 font-bold disabled:opacity-40 disabled:cursor-not-allowed'
                      >
                        -
                      </button>

                      <span className='px-4 py-1 border-x-2 border-black font-bold'>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleQtyUpdation(item.product?._id, "increment")}
                        className='px-3 py-1 font-bold'
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Order Summary */}
        <div className='h-fit bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-xl p-6'>

          <h2 className='text-2xl font-bold border-b-2 border-black pb-4'>
            Order Summary
          </h2>

          <div className='space-y-5 py-6'>

            {/* Subtotal */}
            <div className='flex justify-between text-gray-600'>
              <span>Subtotal</span>

              <span className='font-bold text-black'>
                ₹ {subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Shipping */}
            <div className='flex justify-between text-gray-600'>
              <span>Shipping</span>

              <span className='font-bold text-[green]'>
                Free
              </span>
            </div>

            {/* Total */}
            <div className='border-t-2 border-dashed border-gray-300 pt-5 flex justify-between'>
              <span className='font-bold text-lg'>
                Total
              </span>

              <span className='font-bold text-2xl'>
                ₹ {Number(total).toLocaleString("en-IN")}
              </span>
            </div>

          </div>

          {/* Shipping Message */}
          <div className='bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mb-5'>
            <p className='text-sm font-medium text-orange-800'>
              Free shipping on all orders!
            </p>
          </div>

          {/* Checkout Button */}
          <button
            disabled={loading || cart?.items?.length === 0}
            className='w-full bg-[#FFD400] py-4 rounded-lg border-2 border-black font-bold text-lg shadow-[3px_3px_0px_#000] hover:translate-y-1 hover:shadow-none transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Proceed to Checkout →
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cart
