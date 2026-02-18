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
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProducts = useMemo(() => {
    const selectedCategory = categoryConfig.find((category) => category.id === activeCategory);
    return products.filter(selectedCategory?.match ?? (() => true));
  }, [activeCategory]);

  return (
    <div>
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
                  className="bg-white border border-primary-light rounded-xl overflow-hidden transition-transform transition-shadow duration-200 hover:-translate-y-2 hover:shadow-lg"
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

    </div>
  );
}
