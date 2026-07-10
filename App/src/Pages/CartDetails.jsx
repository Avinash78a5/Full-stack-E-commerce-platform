import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeCart } from '../Slices/cartSlice'

const CartDetails = ({ cartItems, handleCheckout, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="space-y-6">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >

            {/* Left Side - Product Image */}
            <div className="flex justify-center items-center">

              <img
                src={item.url}
                alt={item.Product}
                className="w-[200px] h-[200px] object-contain"
              />

            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col flex-1 justify-between">

              {/* Product Info */}
              <div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {item.Product}
                </h2>

                <p className="text-gray-600 mt-2">
                  {item.Descripition}
                </p>

                <p className="text-gray-500 mt-1">
                  {item.Display}
                </p>

                <p className="text-gray-500 mt-1">
                  {item.Camera}
                </p>

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-2xl font-bold text-black">
                    ₹{item.Sellingprice}
                  </span>

                  <span className="line-through text-gray-400">
                    ₹{item.Orginalprice}
                  </span>

                </div>

              </div>

              {/* Quantity + Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-6">

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xl"
                    onClick={() => dispatch(decreaseQuantity({
                      id: item.id,
                      category: item.category
                    }))}
                  >
                    -
                  </button>

                  <span className="px-6 py-2 font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xl"
                    onClick={() => dispatch(increaseQuantity({
                      id: item.id,
                      category: item.category
                    }))}
                  >
                    +
                  </button>

                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition" onClick={() => dispatch(removeCart({
                    id: item.id,
                    category: item.category
                  }))}
                >
                  Remove
                </button>

              </div>

            </div>

          </div>



        ))}

        {
          cartItems.length > 0 && (
            <div className="mt-3">
              <p>Total Price: ₹{totalPrice.toLocaleString()}</p>
              <button className="w-full inline-block rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:w-auto cursor-pointer" onClick={handleCheckout}>
                Order Now
              </button>

            </div>
          )
        }


      </div>



    </>
  )
}

export default CartDetails