import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { increaseCount } from "../store/cartItemCountSlice";
import { decreaseCount } from "../store/cartItemCountSlice";
import { removeIdFromItemCount } from "../store/cartItemCountSlice";

import { useState } from "react";
import Toast from "./Toast";

export default function CartCard({ data }) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state);

  let timer;
  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOrderSuccess(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full bg-gray-300 p-2 rounded-xl">
      <div className="w-full sm:w-auto">
        <img
          src={data.image}
          className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] object-cover rounded-xl"
        />
      </div>
      <div className="max-w-[200px] w-full flex flex-col gap-3">
        <p className="text-sm sm:text-base">{data.title.slice(0, 50)}</p>
        <p className="text-sm sm:text-base">Price: Rs {data.price}</p>
      </div>
      <div className="flex flex-col items-center mr-5">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decreaseCount(data.id))}
            className="bg-gray-700 text-white   text-2xl rounded-md px-2 cursor-pointer"
          >
            -
          </button>
          <span>{itemCount?.[data.id] || 1}</span>
          <button
            onClick={() => dispatch(increaseCount(data.id))}
            className="bg-gray-700 text-white  text-2xl rounded-md px-2 cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(removeFromCart(data.id)),
              dispatch(removeIdFromItemCount(data.id));
          }}
          className="bg-gray-700 mt-2 text-white h-10 rounded-md px-2 cursor-pointer"
        >
          Remove from cart
        </button>
        <button
          onClick={() => handlePlaceOrder()}
          className="flex items-center bg-gray-700 mt-2 text-white h-10 rounded-md px-2 cursor-pointer"
        >
          Order Now
        </button>
      </div>
      {orderSuccess && <Toast />}
    </div>
  );
}
