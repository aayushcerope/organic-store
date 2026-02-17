import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice, products } from "../data/products";

const categoryConfig = [
  { id: "all", label: "All Products", match: () => true },
  { id: "vegetables", label: "Vegetables", match: (product) => ["organic-tomato", "fresh-spinach"].includes(product.id) },
  { id: "fruits", label: "Fruits", match: (product) => ["kashmiri-apple"].includes(product.id) },
  { id: "milk-dairy", label: "Milk & Dairy", match: (product) => ["raw-cow-milk"].includes(product.id) },
  { id: "eggs-meat", label: "Eggs & Meat", match: () => false }
];

export default function HomePage() {
  const { addToCart, cartCount } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProducts = useMemo(() => {
    const selectedCategory = categoryConfig.find((category) => category.id === activeCategory);
    return products.filter(selectedCategory?.match ?? (() => true));
  }, [activeCategory]);

  return (
    <div>
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur border-b border-primary-light">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between gap-4">
          <h1 className="font-black text-2xl text-primary">Organic Store</h1>
          <nav className="flex flex-wrap gap-2 text-sm items-center">
            <Link className="px-3 py-2 rounded-full bg-primary text-white" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 rounded-full bg-primary/10" to="/checkout">
              Checkout ({cartCount})
            </Link>
            <Link className="px-3 py-2 rounded-full bg-primary/10" to="/login">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-10">
        <section
          className="relative rounded-2xl overflow-hidden min-h-[340px] flex items-center p-10 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmxpKnYb65Xy5L5UVE03MXQV7Efb88RuMWAYqzvdbpGF8HCQaZ-VmFLO72LuKGyw_xMMUchMcdhcH3M_6RyJUYrjr0dVHI0OKEYt8A7FkQvAiu_NnQ7lIitDqskACdPHEeyi1sEwnJlo2QVErI_Za8UXFAXH8TdLV0lNU0ycs-qzpICmSbJ3yxtuxNxC5jGHl_biwS_-cjpF1-9bwjk0HIYSXP24PggkrG63CW2uKvcOgFM4CqqVIAumEiDB71evtqoswIZQ8kVPa6')",
            backgroundSize: "cover"
          }}
        >
          <div>
            <p className="text-sm font-bold mb-2">100% ORGANIC & FRESH</p>
            <h2 className="text-4xl md:text-6xl font-black">Fresh & Natural Everyday</h2>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-5">Browse Products</h3>
          <div className="flex flex-wrap gap-3 mb-5">
            {categoryConfig.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`px-5 py-2 rounded-full border transition ${
                    isActive
                      ? "bg-primary text-white border-primary shadow"
                      : "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {visibleProducts.length === 0 ? (
            <p className="text-slate-600 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              No products available in this category right now.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white border border-primary-light rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <Link to={`/product/${product.id}`}>
                    <img className="h-56 w-full object-cover" src={product.image} alt={product.name} />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`} className="hover:underline">
                      <h4 className="font-bold text-lg">{product.name}</h4>
                    </Link>
                    <p className="text-primary font-bold">{formatPrice(product.price)}/{product.unit}</p>
                    <button
                      className="mt-3 w-full rounded-lg bg-primary text-white py-2"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-center gap-4">
            <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-xl">🚚</span>
            <div>
              <h4 className="font-bold text-2xl leading-tight">Free Shipping</h4>
              <p className="text-slate-600">On all orders over ₹500 across the city.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-50 p-6 flex items-center gap-4">
            <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-xl">🏅</span>
            <div>
              <h4 className="font-bold text-2xl leading-tight">Certified Organic</h4>
              <p className="text-slate-600">100% guarantee on all our fresh produce.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6 flex items-center gap-4">
            <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-xl">🎧</span>
            <div>
              <h4 className="font-bold text-2xl leading-tight">24/7 Support</h4>
              <p className="text-slate-600">Instant access to support whenever you need.</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="border-t border-primary-light bg-slate-100/80 mt-8">
        <div className="max-w-7xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl font-black text-primary">Organic Store</h3>
            <p className="text-slate-600">
              We believe in the power of nature. Our mission is to provide fresh, organic, and sustainable
              produce to healthy families everywhere.
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Shop Products</Link></li>
              <li><Link to="/checkout">Contact</Link></li>
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
      </footer>
    </div>
  );
}
