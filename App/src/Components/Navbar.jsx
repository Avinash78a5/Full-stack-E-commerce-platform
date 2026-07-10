import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../config/supabase';
import { removeUser } from '../Slices/userSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser());
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#0F172A] border-b border-slate-800 shadow-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          
          {/* Logo - Elegant & Attracting */}
          <div className="flex items-center shrink-0">
            <Link to="/home" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-900/50">
                <span className="text-lg font-black italic">E</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white group-hover:text-blue-400 transition-all">
                SHOP<span className="text-blue-500">.</span>
              </span>
            </Link>
          </div>

          {/* Search Bar - High Contrast & Premium */}
          <div className="hidden flex-1 max-w-2xl px-12 md:block">
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <IoIosSearch className="h-4 w-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search premium electronics, brands..."
                className="block w-full rounded-full border-none bg-slate-800/50 py-2.5 pl-11 pr-4 text-sm font-medium text-white transition-all focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/50 outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 lg:flex">
              <Link to="/home" className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-all">
                Sellers
              </Link>
              <div className="flex items-center gap-1 cursor-pointer group text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-all">
                <Link to="/products/mobile">
                  <span>Explore</span>
                </Link>
                <MdKeyboardArrowDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-all duration-500" />
              </div>
            </div>

            {/* User Auth & Cart */}
            <div className="flex items-center gap-6">
              {user ? (
                <button
                  onClick={signOut}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-black text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all overflow-hidden shadow-inner">
                    {user.email[0].toUpperCase()}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-200 hidden sm:inline group-hover:text-blue-400">
                    {user.email.split('@')[0]}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(true)}
                  className="rounded-full bg-blue-600 px-6 py-2 text-[11px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/40 cursor-pointer"
                >
                  Login
                </button>
              )}

              {/* Cart Button - The "Attractor" */}
              <Link label="Cart" to="/cart" className="relative group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.1em] text-[#0F172A] hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95">
                <FaCartShopping className="h-3.5 w-3.5 text-blue-600 group-hover:text-white" />
                <span className="hidden md:inline">My Cart</span>
                <span className="absolute -top-1.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[8px] text-white">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar