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
    navigate("/checkout");
  };

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-6 flex gap-2 text-sm">
        <Link to="/" className="text-primary">
          Home
        </Link>
        / <span>{product.name}</span>
      </div>
      <section className="grid lg:grid-cols-2 gap-8">
        <img className="rounded-2xl w-full h-[420px] object-cover" src={product.image} alt={product.name} />
        <div>
          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
          <p className="text-2xl font-black text-primary mb-4">
            {formatPrice(product.price)} / {product.unit}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex gap-3 mb-8 items-center">
            <button
              className="px-4 py-2 rounded-lg border"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 rounded-lg border min-w-12 text-center">{quantity}</span>
            <button className="px-4 py-2 rounded-lg border" onClick={() => setQuantity((current) => current + 1)}>
              +
            </button>
          </div>
          <button className="px-8 py-3 rounded-lg bg-primary text-white font-bold" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}
