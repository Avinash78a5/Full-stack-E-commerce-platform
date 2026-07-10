import React from 'react'

const OrderDetails = ({ orders }) => {
  return (
    <div className="space-y-6">

      {orders && orders.length > 0 ? (
        orders.map((item) => (
          <div
            key={item.id + (item.payment_id || '')}
            className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >

            <div className="flex justify-center items-center">
              <img
                src={item.url}
                alt={item.Product}
                className="w-[180px] h-[180px] object-contain"
              />
            </div>

            <div className="flex flex-col flex-1 justify-between">

              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.Product}
                </h2>

                {item.Descripition && (
                  <p className="text-gray-600 mt-2">{item.Descripition}</p>
                )}

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-2xl font-bold text-black">
                    ₹{item.Sellingprice}
                  </span>

                  {item.Orginalprice && (
                    <span className="line-through text-gray-400">
                      ₹{item.Orginalprice}
                    </span>
                  )}
                </div>

              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-700">
                <div>Quantity: <span className="font-semibold">{item.quantity}</span></div>
                <div>Total: <span className="font-semibold">₹{item.total_price}</span></div>
                {item.payment_id && (
                  <div>Payment: <span className="font-semibold">{item.payment_id}</span></div>
                )}
                {item.category && (
                  <div>Category: <span className="font-semibold">{item.category}</span></div>
                )}
              </div>

            </div>

          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            className="w-40"
            alt=""
          />

          <h2 className="text-2xl font-semibold mt-4">No Orders Yet</h2>

          <p className="text-gray-500 mt-2">Start shopping to place your first order</p>
        </div>
      )}

    </div>
  )
}

export default OrderDetails