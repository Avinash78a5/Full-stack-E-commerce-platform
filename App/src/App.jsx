import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter,RouterProvider,Navigate,Outlet } from "react-router-dom"
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Home from './Pages/Home'
import LandingPage from './Pages/landingPage'
import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import Success from './Pages/Success'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { supabase } from './config/supabase.js'
import {useDispatch} from 'react-redux';
import { setUser } from './Slices/userSlice.js';
import { useSelector } from 'react-redux';

import { fetchCartAsync } from './Slices/cartSlice';

//Routes
import PublicRoutes from './Routes/PublicRoutes.jsx';
import ProtectedRoutes from './Routes/ProtectedRoutes.jsx';

function App() {

  //Check if user session exists on app load and set user in store to fetch cart data
  useEffect(() => {
    getUser();
  },[]);


  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user);

  const getUser = async () => {
    const { data,error } = await supabase.auth.getSession();
    if(data?.session?.user){
      dispatch(setUser(data.session.user));
      dispatch(fetchCartAsync(data.session.user.id));
      console.log("User session found & dispatched to store to fetch cart");
      
    }
  }

  useEffect(() => {
    if(user){
      console.log(user);
      console.log(typeof user.id);
    }
  },[user]);


  
  const MainLayout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }


  const router = createBrowserRouter([


    //Public Routes
    {
      path:"/",
      element:<PublicRoutes/>, 
      children:[
        {
          element:<MainLayout/>,
          children:[
            {
              index:true,
              element:<LandingPage/>
            }
          ]
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<SignUp/>
        }
      ]
    },

    //Protected Routes
   { 
      element:<ProtectedRoutes/>,
        children:[
            {
              element:<MainLayout/>, //Wrap everything in the layout
              children:[
                {
                  path:"home",
                  element:<Home/>
                },
                {
                  path:"cart",
                  element:<Cart/>
                },
                {
                  path:"productDetails/:category/:id",
                  element:<ProductDetails/>
                },
                {
                  path:"products/:category",
                  element:<Products/>
                },
                {
                  path:"success",
                  element:<Success/>
                }
              ]
            }
        ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
