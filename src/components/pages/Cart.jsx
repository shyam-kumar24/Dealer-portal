import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function CartPage() {
  const {
    cart,
    itemCount,
    totalAmount,
    countTotal,
    incrementItemCount,
    decrementItemCount,
    removeItemFromCart,
  } = useCart();

  // useEffect(() => {
  //   const total = cart.reduce(
  //     (sum, item) => sum + item.price * (itemCount?.[item.id] || 1),
  //     0
  //   );
  //   setTotalAmount(total.toFixed(2));

  //   const count = cart.reduce(
  //     (sum, item) => sum + (itemCount?.[item.id] || 1),
  //     0
  //   );
  //   setCountTotal(count);
  // }, [cart, itemCount]);

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="fixed top-0 right-0 left-0 shadow shadow-gray-600 p-4 flex bg-gray-300 items-center justify-center z-10">
        <h1 className="text-xl md:text-2xl font-bold">Cart</h1>
      </div>

      <div className="mt-[70px]">
        {cart && cart.length ? (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-8/12 xl:w-6/12 flex flex-col gap-5 p-3 md:p-5 lg:pl-5">
              {cart.map((cartItem) => (
                <CartCard
                  key={cartItem.id}
                  data={cartItem}
                  onIncrement={incrementItemCount}
                  onDecrement={decrementItemCount}
                  onRemove={removeItemFromCart}
                  quantity={itemCount?.[cartItem.id] || 1}
                />
              ))}
            </div>
            <div className="w-full lg:w-4/12 xl:w-3/12 p-3 md:p-5 sticky top-[70px] h-fit bg-gray-100 rounded-lg m-3 md:m-5">
              <h1 className="font-bold text-xl md:text-2xl">Cart Summary</h1>
              <div className="flex flex-col gap-5 mt-5">
                <span>Total item: {countTotal}</span>
                <span>Total Amount: {totalAmount}</span>
                <Link
                  to="/orders"
                  className="bg-gray-700 text-white w-full text-lg md:text-xl rounded-md p-2 cursor-pointer text-center"
                >
                  Your Orders
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="min-h-[80vh] flex flex-col items-center justify-center ">
              <h1 className="text-gray-800 font-bold text-xl mb-2">
                your cart is empty
              </h1>
              <Link to="/products">
                <button className="bg-gray-700 cursor-pointer text-white border-2 rounded-lg font-bold p-4">
                  Shop Now
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
