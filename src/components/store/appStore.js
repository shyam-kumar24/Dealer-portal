import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import cartItemCountReducer from './cartItemCountSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        itemCount : cartItemCountReducer
    }
})

export default store