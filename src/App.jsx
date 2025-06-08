import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import MyOrdersPage from "./components/pages/MyOrders";
import ProductPage from "./components/pages/Products";
import CartPage from "./components/pages/Cart";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/orders" element={<MyOrdersPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}
