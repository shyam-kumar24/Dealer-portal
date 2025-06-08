import { useContext } from "react";
import { GlobalContext } from "../context";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { showSidebar } = useContext(GlobalContext);

  if (!showSidebar) return null;

  return (
    <div className="w-60 bg-gray-200  p-4 text-xl font-bold mt-1">
      <ul className="flex flex-col gap-5 pt-10">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
