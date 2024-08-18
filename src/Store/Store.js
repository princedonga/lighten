import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import authReducer from './Slice/Photo'; 
const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        auth: authReducer,
    }
})

export default store