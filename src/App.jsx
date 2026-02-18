import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-6">
              <h1 className="text-3xl font-bold">Page not found</h1>
              <div className="flex gap-3">
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/">
                  Home
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/checkout">
                  Checkout
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/order">
                  Order
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/login">
                  Login
                </Link>
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
