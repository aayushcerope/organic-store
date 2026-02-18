import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary-light bg-slate-100/80">
      <div className="max-w-7xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-3xl font-black text-primary">Organic Store</h3>
          <p className="text-slate-600">
            We believe in the power of nature. Our mission is to provide fresh, organic, and sustainable produce to
            healthy families everywhere.
          </p>
          <div className="flex gap-3 text-primary">
            <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center">𝕏</span>
            <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center">f</span>
            <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center">◎</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Shop Products</Link>
            </li>
            <li>
              <Link to="/checkout">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Categories</h4>
          <ul className="space-y-2 text-slate-600">
            <li>Fresh Vegetables</li>
            <li>Fresh Fruits</li>
            <li>Milk &amp; Dairy</li>
            <li>Organic Spices</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Stay Updated</h4>
          <p className="text-slate-600 mb-3">Subscribe to our newsletter for exclusive offers and fresh updates.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            <button type="button" className="w-full rounded-lg bg-primary text-white py-2 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-light bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Organic Store. Fresh from farm to your doorstep.</p>
          <p className="font-medium text-primary">Healthy choices, delivered daily.</p>
        </div>
      </div>
    </footer>
  );
}
