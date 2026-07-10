import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsData } from '../data/ProductsData';
import { supabase } from '../config/supabase';
import { ProductRegistry } from '../data/ProductRegistry';

const initialState = {
    cart:[],
    cartLoaded:false,
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action) => {
            const existingProduct = state.cart.find((item) => item.id === action.payload.id && item.category === action.payload.category);

            if(existingProduct){
                existingProduct.quantity += 1; 
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity:1,
                })
            }
        },
        increaseQuantity:(state,action) => {
            const product = state.cart.find((item) => item.id === action.payload.id && item.category === action.payload.category);
            if(product){
                product.quantity +=1;
            }
        },
        decreaseQuantity:(state,action) => {
            const product = state.cart.find((item) => item.id === action.payload.id && item.category === action.payload.category);

            if(product) {
                if(product.quantity > 1) {
                    product.quantity -=1;
                } else {
                    state.cart = state.cart.filter(
                        (item) => 
                            (item.id !== action.payload.id && item.category !== action.payload.category)
                    )
                }
            }
        },
        removeCart:(state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload && item.category !== action.payload.category)
        },

        clearCart:(state) => {
            state.cart = [];
        }
    },
    extraReducers:(builder) => {

            builder.addCase(
                fetchCartAsync.fulfilled,

                (state, action) => {

                    state.cart = action.payload;
                    state.cartLoaded = true;
                    console.log("Cart fetched successfully");
                    console.log(action.payload);
                }
            );
            builder.addCase(
                fetchCartAsync.rejected,
                (state, action) => {
                    state.cartLoaded = true;
                    console.log("Failed to fetch cart");
                    console.log(action.payload);
                }
            );

            //Handle syncCartWithDB results
            builder.addCase(
            syncCartWithDB.fulfilled,(state,action) => {

                console.log("Cart synced with DB successfully");
                console.log(action.payload);
            });
            builder.addCase(syncCartWithDB.rejected,(state,action) => {

                console.log("Failed to sync cart with DB");
                console.log(action.payload);
            });
    }
})


export const fetchCartAsync = createAsyncThunk(

   "cart/fetchCartAsync",

   async (userId, thunkAPI) => {

      try {

         // fetch current user's cart rows

         const { data, error } =
         await supabase
            .from("cart")
            .select("*")
            .eq("user_id", userId);

    
         // if no cart items
         if(!data || data.length === 0){
            return [];
         }

         if(error){
            throw error;
         }
         
         console.log('fetch cart async works');
         console.log(data);

         // convert DB rows into full product objects

                const finalCart = data
                    .map((cartItem) => {

                    const products =
                    ProductRegistry[cartItem.category]

                    if(!products){
                        return null;
                    }

                    const product = products.find((item) =>
                        item.id === cartItem.product_id
                    );

                    if(!product) {
                        return null;
                    }


                    return {
                            ...product,
                            category:cartItem.category,
                            quantity:cartItem.quantity,
                    }
                    })
                    // removes null values
                    .filter(Boolean);

         return finalCart;

      } catch(error){

         return thunkAPI.rejectWithValue(
            error.message
         );
      }
   }
);


export const syncCartWithDB = createAsyncThunk(

   "cart/syncCartWithDB",
    async ({userId,cartItems},thunkAPI) => {
        try {

            //delete old cart items in DB

            const {error} = await supabase.from("cart").delete().eq("user_id",userId);

            if(error) {
                throw error;
            }

            //if cart is empty stop here
            if(cartItems.length === 0) {
                return [];
            }

            const newCartItems = cartItems.map((item) => ({

                //return only an object
                user_id: userId,
                product_id:item.id,
                category:item.category,
                quantity:item.quantity,
            }));

            //insert new cart items in DB
            const {error:insertError} = await supabase.from("cart").insert(newCartItems);

            if(insertError) {
                throw insertError;
            }

            return newCartItems;
        }  
          catch(error) {
            return thunkAPI.rejectWithValue(error.message);
          }
    }
);

export const { addCart,increaseQuantity,decreaseQuantity, removeCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;