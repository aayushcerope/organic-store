import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinkClassName = ({ isActive }) =>
  `px-3 py-2 rounded-full transition ${
    isActive ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"
  }`;

export default function SiteHeader() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur border-b border-primary-light">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between gap-4">
        <Link className="font-black text-2xl text-primary" to="/">
          Organic Store
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm items-center">
          <NavLink className={navLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClassName} to="/checkout">
            Checkout ({cartCount})
          </NavLink>
          <NavLink className={navLinkClassName} to="/order">
            Order
          </NavLink>
          <NavLink className={navLinkClassName} to="/login">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
