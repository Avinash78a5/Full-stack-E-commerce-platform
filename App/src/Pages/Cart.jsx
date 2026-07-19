import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { increaseQuantity, decreaseQuantity, removeCart } from '../Slices/cartSlice';
import { syncCartWithDB } from '../Slices/cartSlice';

import { ProductsData as Products } from '../data/ProductsData';
import { supabase } from '../config/supabase';
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";

import { ProductRegistry } from '../data/ProductRegistry';

import CartDetails from './CartDetails';
import OrderDetails from './OrderDetails';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const Cart = () => {

  const cartItems = useSelector(state => state.cartData.cart);
  const user = useSelector(state => state.userData.user);
  const cartLoaded = useSelector(state => state.cartData.cartLoaded);

  const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + (item.quantity * parseInt(item.Sellingprice.replace(/,/g, "")));
  }, 0)

  console.log(`totalPrice`, totalPrice);

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("cart");

  const [orders, setOrders] = useState([]);


  //useEffect for cart updates
  useEffect(() => {
    if (!user) return; //If no user, skip syncing

    console.log(cartLoaded);
    //Only run after cart gets loaded from DB to avoid overwriting with empty cart on initial load
    if (!cartLoaded) return;

    //debounce sync to avoid excessive calls only this runs after user stops adding or removing items in cart for some delay then this dispatch will execute

    const timeout = setTimeout(() => {
      dispatch(syncCartWithDB({ userId: user.id, cartItems }));
    }, 3000)

    return () => clearTimeout(timeout);
  }, [cartItems, cartLoaded]);

  console.log("cart page loaded");

  //useEffect for orders info
  useEffect(() => {
    getOrdersInfo();
  }, [user]);

  const getOrdersInfo = async () => {

    try {
      const { data, error } = await supabase.from("orders").select("*").eq("user_id", user.id);

      if (!data || data.length === 0) {
        setOrders([]);
        return;
      }

      if (error) {
        console.log("Error fetching orders:", error);
      }

      const ordersInfo = data.map((order) => {

        if (!order.category) {
          console.log("Missing category:", order);
          return null;
        }

        const categoryProducts =
          ProductRegistry[order.category];

        if (!categoryProducts) {
          console.log("Category not found:", order.category);
          return null;
        }

        const product = categoryProducts.find(
          (item) => item.id === order.product_id
        );

        if (!product) {
          console.log("Product not found:", order);
          return null;
        }

        return {
          ...product,
          category: order.category,
          quantity: order.quantity,
          total_price: order.total_price,
          payment_id: order.payment_id,
        };
      })

        .filter(Boolean);

      console.log("Orders info fetched successfully:", ordersInfo);
      setOrders(ordersInfo);

    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };




  //Checkout handler

  const handleCheckout = async () => {

    const toastId = toast.loading("Redirecting to payment gateway ..",
      {
        position: "top-center"
      }
    );


    try {


      const response =
        await fetch(`${import.meta.env.VITE_API_URL}/api/payments/create-checkout-session`,

          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

              cartItems: cartItems
            })
          }
        );

      const data = await response.json();

      toast.dismiss(toastId);

      toast.success("Redirecting to Stripe..",
        {
          position: "top-center"
        }
      );

      window.location.href =
        data.url;

    } catch (error) {

      console.log(error);
      toast.dismiss(toastId);
      toast.error("Failed to create checkout session",
        {
          position: "top-center"
        }
      );
    }
  };




  return (
    <>
      {
        user ? (
          <div className="max-w-5xl mx-auto bg-gray-100 min-h-screen">

            {/* Tabs */}
            <div className="flex bg-white shadow-sm">

              <button
                onClick={() => setActiveTab("cart")}
                className={` 
                            flex-1 py-4 text-center font-semibold border-b-2 transition
                            ${activeTab === "cart"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600"
                  }
                        `}
              >
                Cart
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`
                            flex-1 py-4 text-center font-semibold border-b-2 transition
                            ${activeTab === "orders"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600"
                  }
                        `}
              >
                Orders
              </button>

            </div>

            {/* Content */}
            <div className="p-10 bg-white mt-2">

              {
                activeTab === "cart" &&
                (

                  <CartDetails cartItems={cartItems} handleCheckout={handleCheckout} totalPrice={totalPrice} />
                )
              }

              {
                activeTab === "orders" && (


                  <OrderDetails orders={orders} />
                )
              }

            </div>

          </div>
        )



          //If no user show empty cart with login prompt
          : (
            <div >
              <div className="flex flex-col items-center justify-center gap-4 py-20">
                <img
                  src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  className="h-[200px] w-[200px] object-contain"
                />
                <p>Missing Cart items?</p>
                <p>
                  Login to see the items you added previously
                </p>
                <Link to="/home">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )
      }
    </>
  );
};

export default Cart