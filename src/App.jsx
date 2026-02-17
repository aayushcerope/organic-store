import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
              <h1 className="text-3xl font-bold">Page not found</h1>
              <div className="flex gap-3">
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/">
                  Home
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/product">
                  Product
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/checkout">
                  Checkout
                </Link>
                <Link className="px-4 py-2 rounded-full bg-primary text-white" to="/login">
                  Login
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
