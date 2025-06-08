import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const cartItemCountSlice = createSlice({
    name:'itemCount',
    initialState,
    reducers:{
        increaseCount : (state = {},action) => {
            if(!state) state = {}
            state[action.payload] = (state[action.payload] || 1) +  1
            console.log('clicked');
        },
        decreaseCount : (state = {},action) => {
           if(!state) state = {}
           state[action.payload] > 1 ? state[action.payload] =  state[action.payload]  -  1 :state[action.payload] = state[action.payload]
           console.log('clicked');
        },
        removeIdFromItemCount: (state = {},action) => {
            if(!state) state = {}
            delete state[action.payload]
        }
    }
})

export const {increaseCount,decreaseCount,removeIdFromItemCount} = cartItemCountSlice.actions

export default cartItemCountSlice.reducer

