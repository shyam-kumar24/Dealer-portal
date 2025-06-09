import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import {
  increaseCount,
  decreaseCount,
  removeIdFromItemCount,
} from "../store/cartItemCountSlice";
import { useState, useEffect } from "react";

export default function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const itemCount = useSelector((state) => state.itemCount);
  const [totalAmount, setTotalAmount] = useState(0);
  const [countTotal, setCountTotal] = useState(0);

  // Calculate totals whenever cart or itemCount changes
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (itemCount?.[item.id] || 1),
      0
    );
    setTotalAmount(total.toFixed(2));

    const count = cart.reduce(
      (sum, item) => sum + (itemCount?.[item.id] || 1),
      0
    );
    setCountTotal(count);
  }, [cart, itemCount]);

  // Cart actions
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    dispatch(removeIdFromItemCount(productId));
  };

  const incrementItemCount = (productId) => {
    dispatch(increaseCount(productId));
  };

  const decrementItemCount = (productId) => {
    dispatch(decreaseCount(productId));
  };

  const isItemInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return {
    cart,
    itemCount,
    totalAmount,
    countTotal,
    addItemToCart,
    removeItemFromCart,
    incrementItemCount,
    decrementItemCount,
    isItemInCart,
  };
}
