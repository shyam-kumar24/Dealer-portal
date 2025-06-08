import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import cartItemCountReducer from './cartItemCountSlice'
import { loadCartFromLocalStorage, saveCartToLocalStorage,loadItemCountFromLocalStorage ,saveItemCountToLocalStorage} from "../utils/localStorage";


const preloadedState = {
    cart: loadCartFromLocalStorage(),
    itemCount: loadItemCountFromLocalStorage() || {}
}


const store = configureStore({
    reducer: {
        cart: cartReducer,
        itemCount : cartItemCountReducer
    },
    preloadedState
})


store.subscribe(() => {
    const {cart,itemCount} = store.getState()
    saveCartToLocalStorage(cart);
    saveItemCountToLocalStorage(itemCount)
})


export default store