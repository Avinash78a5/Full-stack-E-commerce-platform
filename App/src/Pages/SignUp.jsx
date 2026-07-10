import React from 'react'
import { useForm } from "react-hook-form"
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();
  const password = watch('password');

  const handleSignUp = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      alert(error?.message);
      console.log(error?.message);
    } else if (data.user) {
      alert("Account created successfully! Please verify your email before logging in.");
      reset();
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }

  return (
    <>
        <h4 className="text-center py-2 bg-gradient-to-br from-green-50 to-blue-100 md:px-4 md:py-4">
          <span className="text-5xl md:text-6xl font-extrabold text-black italic cursor-pointer">E{" "}</span>
          <span className="text-4xl md:text-4xl font-bold text-black tracking-tight hover:text-blue-400 transition-all cursor-pointer">
                  SHOP<span className="text-blue-500">.</span>
          </span>
        </h4>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 px-4 py-8">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-600">Join us and start shopping today</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  {...register("name", { 
                    required: "Full name is required"
                  })}
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

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
                  placeholder="Create a strong password"
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

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold transition hover:bg-blue-700 active:scale-95"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-blue-600 hover:underline">
                  Sign in here
                </a>
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">By signing up:</span> You agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignUp
