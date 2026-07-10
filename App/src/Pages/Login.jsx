import React from 'react'
import { setUser } from '../Slices/userSlice';
import { useForm } from "react-hook-form"
import { supabase } from '../config/supabase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCartAsync } from '../Slices/cartSlice';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      alert(error?.message);
      console.log(error?.message);
    } else {
      dispatch(setUser(data.user));
      dispatch(fetchCartAsync(data.user.id));
      alert('Welcome back!');
      reset();
      navigate('/');
    }
  }

  return (
    <>
        <h4 className="text-center py-2 bg-gradient-to-br from-green-50 to-blue-100 md:px-4 md:py-2">
          <span className="text-5xl md:text-6xl font-extrabold text-black italic cursor-pointer">E{" "}</span>
          <span className="text-4xl md:text-4xl font-bold text-black tracking-tight hover:text-blue-400 transition-all cursor-pointer">
                  SHOP<span className="text-blue-500">.</span>
          </span>
        </h4>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 py-4">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to your account to continue shopping</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                  />
                  {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold transition hover:bg-blue-700 active:scale-95"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-center text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" className="font-medium text-blue-600 hover:underline">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Login
