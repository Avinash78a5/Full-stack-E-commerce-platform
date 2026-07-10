import {configureStore} from "@reduxjs/toolkit"
import userReducer from '../Slices/userSlice.js'
import cartReducer from '../Slices/cartSlice.js'

export const store = configureStore({
    reducer:{
       userData:userReducer,
       cartData:cartReducer,
    },
});