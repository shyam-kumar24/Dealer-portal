import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

export default function ProductCard({ data }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(data));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(data.id));
  }
  

  return (
    <div className="w-72 flex flex-col gap-4 m-5 bg-violet-500 p-3 rounded-md shadow-2xl shadow-gray-900">
      <div>
        <img
          src={data.image}
          className="h-40 w-full object-cover rounded"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h1 className="font-bold text-white line-clamp-2">{data.title}</h1>
          <p className="text-white">Price :Rs {data.price}</p>
        </div>
        <button
          onClick={
            cart.some((item) => item.id === data.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-violet-900 text-white h-10 rounded mt-2 cursor-pointer"
        >
          {cart.some((item) => item.id === data.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}


// state is always an object, regardless of what's inside each slice.

// cart can be an array, but you're not destructuring the array — you're destructuring the top-level object.

// You destructure it like const { cart } = state only for cleaner access.

// useSelector: 

// It subscribes your component to the Redux store.

// Whenever the selected part of the state changes, your component re-renders.

// It returns whatever you return from the function inside it.