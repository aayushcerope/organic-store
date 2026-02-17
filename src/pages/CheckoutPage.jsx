import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function CheckoutPage() {
  const { items, cartTotal, updateQuantity } = useCart();

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Secure Checkout</h1>
      <div className="grid lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-4">
          <h2 className="text-xl font-bold">Shipping Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["First Name", "Last Name", "Email Address", "Street Address", "City", "ZIP Code"].map((field) => (
              <input key={field} className="border rounded-lg p-3" placeholder={field} />
            ))}
          </div>
          <h2 className="text-xl font-bold pt-4">Payment Method</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Credit Card", "PayPal", "Apple Pay"].map((method) => (
              <button key={method} className="border rounded-lg p-4 hover:border-primary">
                {method}
              </button>
            ))}
          </div>
        </section>
        <aside className="lg:col-span-5 border rounded-xl p-5 bg-white h-fit">
          <h3 className="text-xl font-bold mb-3">Order Summary</h3>
          {items.length === 0 ? (
            <div className="space-y-3">
              <p className="text-gray-600">Your cart is empty. Add products to continue checkout.</p>
              <Link className="inline-block px-4 py-2 rounded-lg bg-primary text-white" to="/">
                Browse products
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="border-b pb-3">
                    <p className="font-semibold">
                      {item.product.name}
                      <span className="float-right">{formatPrice(item.lineTotal)}</span>
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {formatPrice(item.product.price)} / {item.product.unit}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded border"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="w-8 h-8 rounded border"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <p className="font-bold text-lg">
                Total <span className="float-right text-primary">{formatPrice(cartTotal)}</span>
              </p>
              <button className="mt-4 w-full rounded-lg bg-primary text-white py-3 font-bold">Place Order</button>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
