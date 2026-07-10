import React from 'react'
import { setUser } from '../Slices/userSlice';

import { useForm } from "react-hook-form"
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { supabase } from '../config/supabase';
import { useDispatch } from 'react-redux';

//
import { fetchCartAsync } from '../Slices/cartSlice';

const LoginModal = ({ isOpen, setIsOpen }) => {

  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [loginType, setLoginType] = useState(true);

  const handleSignUp =  async (formData) => {
    const {data,error} = await supabase.auth.signUp({
      email:formData.email,
      password:formData.password,
    });
    if(data.user){
      alert("account created,please verify your email");
    }
    console.log(formData);
    reset();
  }

  const handleLogin =  async (formData) => {
    const {data ,error} = await supabase.auth.signInWithPassword({
      email:formData.email,
      password:formData.password,
    });
    if(error){
      console.log(error?.message);
    } else {
      dispatch(setUser(data.user));
      dispatch(fetchCartAsync(data.user.id));
      alert('Welcome');
      reset();
    }
  }

  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md  bg-opacity-20 px-4 py-8">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-700 shadow hover:bg-gray-100"
        >
          <IoMdClose className="h-5 w-5" />
        </button>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between bg-gradient-to-b from-blue-700 to-blue-500 p-8 text-white">
            <div>
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="mt-4 text-sm text-blue-100">
                Sign in to access your orders, wishlist, and personalized recommendations.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Secure login</p>
              <p className="mt-3 text-lg font-semibold">Fast checkout, order tracking, and more.</p>
            </div>
          </div>

          <div className="space-y-6 p-8">
            <div>
              <h3 className="text-2xl font-semibold">{loginType ? 'Login' : 'Create account'}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {loginType
                  ? 'Enter your details to continue.'
                  : 'Fill the form to create a new account.'}
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
              </div>

              {loginType ? (
                    <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700" onClick={handleSubmit(handleLogin)}
                >
                    Login 
                  </button>
              ): (
                <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700" onClick={handleSubmit(handleSignUp)}
                >
                    Sign In 
                  </button>
              )}
              
            </form>

            <div className="border-t border-gray-200 pt-4 text-center">
              <button
                type="button"
                onClick={() => setLoginType((prev) => !prev)}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                {loginType ? 'New to Flipkart? Create an account' : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal