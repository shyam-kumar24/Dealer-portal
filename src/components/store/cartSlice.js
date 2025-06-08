import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,action) => {
            // yaha ham direct state ko mutate kar de rahe hain ! jo ki normal useState ke case me nhi kar sakte.!
            state.push(action.payload)
        },
        removeFromCart: (state,action) => {
           return  state.filter((item) => item.id !== action.payload)
        //  here action is removeFromCart function itself !!
        },
        clearCart() {
           return [];
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer

