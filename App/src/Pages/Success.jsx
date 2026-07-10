import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Slices/cartSlice';
import { toast } from "sonner";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Centered loading state while we save order details and clear cart
  const [loading, setLoading] = useState(true);
  // To prevent multiple execution of useEffect due to strict mode in development
  const [processed, setProcessed] = useState(false);
  const user = useSelector(state => state.userData.user);
  const cartItems = useSelector(state => state.cartData.cart);
  const cartLoaded = useSelector(state => state.cartData.cartLoaded);

  useEffect(() => {
    if (!cartLoaded) return;
    if (!user) return;
    if (processed) return;
    console.log(user);

    const saveOrders = async () => {
      try {
        // if cart empty
        if (cartItems.length === 0) {
          setLoading(false);
          toast.error(
            "Cart is empty",
            {
              position:
                "bottom-center"
            }
          );
          navigate("/cart");
          return;
        }
        // prepare order items data for insertion
        const orderItems = cartItems.map((item) => {
          return {
            user_id: user.id,
            product_id: item.id,
            category: item.category,
            quantity: item.quantity,
            total_price: item.quantity * parseInt(item.Sellingprice.replace(/,/g, "")),
            payment_id:
              "stripe_payment_success"
          };
        });
        // insert into orders table
        const { error: orderError } = await supabase
          .from("orders")
          .insert(orderItems);
        if (orderError) {
          throw orderError;
        }
        // clear cart table rows
        const { error: cartError } = await supabase
          .from("cart")
          .delete()
          .eq("user_id", user.id);
        if (cartError) {
          throw cartError;
        }
        // clear redux cart state
        dispatch(clearCart());
        setProcessed(true);
        console.log("Orders saved successfully");
        // stop loader
        setLoading(false);
        // success toast
        toast.success(
          "Payment successful!",
          {
            position:
              "bottom-center"
          }
        );
        // redirect after 2 seconds
        setTimeout(() => {
          navigate("/cart");
        }, 2000);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        toast.error("Failed to process order",
          {
            position:
              "bottom-center"
          }
        );
      }
    };
    saveOrders();
  }, [cartLoaded, cartItems, user, processed]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-2xl font-semibold">
          Processing your order...
        </h1>
      </div>
    );
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful
      </h1>
    </div>
  );
}
export default Success