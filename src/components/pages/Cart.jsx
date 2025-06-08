import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CartPage() {
  const { cart, itemCount } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [countTotal, setCountTotal] = useState(0);


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



  return (
    <div className="flex flex-col gap2">
      <div className="fixed right-0 left-0 shadow shadow-gray-600 p-4 flex bg-gray-300  items-center justify-center">
        <h1 className="text-2xl font-bold">Cart</h1>
      </div>

      <div>
        {cart && cart.length ? (
          <>
            <div className="w-6/12 flex flex-col gap-5 m-5 mt-[100px]">
              {cart.map((cartItem) => (
                <CartCard data={cartItem} />
              ))}
            </div>
            <div className="w-2/12 fixed top-20 right-50">
              <h1 className="font-bold text-2xl">Cart summery</h1>
              <div className="flex flex-col gap-5 mt-5">
                <span>Total item: {countTotal}</span>
                <span>Total Amount: {totalAmount}</span>
                <Link to='/orders' className="bg-gray-700 text-white w-fit  text-xl rounded-md p-2 cursor-pointer">Your Orders</Link>
              </div>
            </div>
          </>
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
