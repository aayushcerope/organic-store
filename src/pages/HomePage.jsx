import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice, products } from "../data/products";

export default function HomePage() {
  const { addToCart, cartCount } = useCart();

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
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
        </section>
      </main>
    </div>
  );
}
