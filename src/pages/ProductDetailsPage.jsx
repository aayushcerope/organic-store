import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice, products } from "../data/products";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [productId]
  );

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 4),
    [productId]
  );

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-4">
        <p className="text-lg font-semibold">Product not found.</p>
        <Link className="px-4 py-2 inline-block rounded-lg bg-primary text-white" to="/">
          Back to products
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const handleOrder = () => {
    addToCart(product.id, quantity);
    navigate("/order");
  };

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-10">
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Link to="/" className="text-primary">Home</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img className="rounded-2xl w-full h-[430px] object-cover" src={product.image} alt={product.name} />
          <div className="flex gap-3 mt-4">
            {[product.image, ...relatedProducts.map((item) => item.image).slice(0, 2)].map((image, index) => (
              <button
                type="button"
                key={image}
                className={`h-14 w-14 rounded-lg border overflow-hidden ${index === 0 ? "border-primary" : "border-gray-200"}`}
              >
                <img src={image} alt="product thumbnail" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Organic Product</p>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-black text-primary mb-4">
            {formatPrice(product.price)} <span className="text-base font-medium text-gray-500">/ {product.unit}</span>
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="border rounded-lg p-3 bg-white">
              <p className="text-xs text-gray-500">Origin</p>
              <p className="font-semibold">Farm Fresh India</p>
            </div>
            <div className="border rounded-lg p-3 bg-white">
              <p className="text-xs text-gray-500">Certification</p>
              <p className="font-semibold">USDA Organic</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center mb-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="px-4 py-2 border-r"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
              <button className="px-4 py-2 border-l" onClick={() => setQuantity((current) => current + 1)}>
                +
              </button>
            </div>

            <button className="px-8 py-3 rounded-lg bg-primary text-white font-bold" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary text-primary font-bold" onClick={handleOrder}>
              Order Now
            </button>
          </div>

          <div className="space-y-3 mt-6">
            <details className="border rounded-lg p-4 bg-white" open>
              <summary className="font-semibold cursor-pointer">Nutritional Information</summary>
              <p className="text-gray-600 mt-2 text-sm">Rich in vitamins and minerals with naturally grown nutrients.</p>
            </details>
            <details className="border rounded-lg p-4 bg-white">
              <summary className="font-semibold cursor-pointer">Storage Tips</summary>
              <p className="text-gray-600 mt-2 text-sm">Keep refrigerated and consume within 3-5 days for best freshness.</p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((item) => (
            <article key={item.id} className="bg-white rounded-xl border overflow-hidden">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              </Link>
              <div className="p-3 space-y-1">
                <Link to={`/product/${item.id}`} className="font-semibold hover:text-primary">
                  {item.name}
                </Link>
                <p className="text-primary font-bold text-sm">{formatPrice(item.price)} / {item.unit}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
