import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const cartItemCountSlice = createSlice({
    name:'itemCount',
    initialState,
    reducers:{
        increaseCount : (state,action) => {
            state[action.payload] = (state[action.payload] || 1) +  1
            console.log('clicked');
        },
        decreaseCount : (state,action) => {
           state[action.payload] > 1 ? state[action.payload] =  state[action.payload]  -  1 :state[action.payload] = state[action.payload]
           console.log('clicked');
        },
        removeIdFromItemCount: (state,action) => {
            delete state[action.payload]
        }
    }
})

export const {increaseCount,decreaseCount,removeIdFromItemCount} = cartItemCountSlice.actions

export default cartItemCountSlice.reducer

