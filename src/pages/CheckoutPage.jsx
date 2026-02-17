import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

function Field({ label, placeholder, fullWidth = false }) {
  return (
    <label className={fullWidth ? "sm:col-span-2 md:col-span-6" : "md:col-span-3"}>
      <span className="mb-2 block text-sm font-medium text-[#1f2937]">{label}</span>
      <input
        className="h-11 w-full rounded-lg border border-[#d9e2d8] bg-white px-3 text-sm placeholder:text-[#a8b0bb] focus:border-primary focus:outline-none"
        placeholder={placeholder}
      />
    </label>
  );
}

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const shippingCost = items.length ? 0 : 0;
  const estimatedTax = items.length ? cartTotal * 0.08 : 0;
  const orderTotal = cartTotal + shippingCost + estimatedTax;

  return (
    <main className="mx-auto max-w-[1180px] px-4 py-6 md:px-8 md:py-8">
      <header className="mb-6 flex items-center justify-between border-b border-[#e4e8e5] pb-4">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-primary">●</div>
          <span className="text-2xl font-bold">Organic Market</span>
        </div>
        <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Secure Checkout
        </span>
      </header>

      <div className="grid gap-8 lg:grid-cols-12">
        <section className="lg:col-span-8">
          <div className="mb-5 flex items-center gap-2 text-sm">
            <span className="text-[#7d8a7e]">Cart</span>
            <span className="text-[#aab4ab]">/</span>
            <span className="font-semibold text-primary">Details</span>
            <span className="text-[#aab4ab]">/</span>
            <span className="text-[#7d8a7e]">Payment</span>
          </div>

          <div className="mb-6 flex items-center justify-between rounded-xl border border-[#c9dbc8] bg-[#f4faf4] p-4">
            <div>
              <p className="font-semibold">Already have an account?</p>
              <p className="text-sm text-[#758071]">Sign in for a faster checkout experience.</p>
            </div>
            <Link to="/login" className="font-semibold text-primary">
              Sign In
            </Link>
          </div>

          <h2 className="mb-4 text-[34px] font-extrabold leading-none tracking-tight">Shipping Details</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            <Field label="First Name" placeholder="Jane" />
            <Field label="Last Name" placeholder="Doe" />
            <Field label="Email Address" placeholder="jane@example.com" fullWidth />
            <Field label="Street Address" placeholder="123 Green Avenue" fullWidth />
            <Field label="City" placeholder="San Francisco" />
            <Field label="State" placeholder="CA" />
            <Field label="ZIP Code" placeholder="94103" />
            <Field label="Phone Number" placeholder="(555) 123-4567" fullWidth />
          </div>

          <h2 className="mb-4 mt-8 text-[34px] font-extrabold leading-none tracking-tight">Payment Method</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Credit Card", "PayPal", "Apple Pay"].map((method, index) => (
              <button
                key={method}
                className={`rounded-xl border p-4 text-center font-semibold ${
                  index === 0 ? "border-primary bg-[#f4faf4] text-primary" : "border-[#dce3dc] bg-white"
                }`}
              >
                {method}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-[#dce3dc] bg-white p-4">
            <label>
              <span className="mb-2 block text-sm font-medium">Card Number</span>
              <input
                className="h-11 w-full rounded-lg border border-[#e1e5e2] px-3 text-sm placeholder:text-[#b3bac4]"
                placeholder="0000 0000 0000 0000"
              />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-medium">Expiration Date</span>
                <input
                  className="h-11 w-full rounded-lg border border-[#e1e5e2] px-3 text-sm placeholder:text-[#b3bac4]"
                  placeholder="MM/YY"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium">CVC</span>
                <input
                  className="h-11 w-full rounded-lg border border-[#e1e5e2] px-3 text-sm placeholder:text-[#b3bac4]"
                  placeholder="123"
                />
              </label>
            </div>
            <label className="mt-4 flex items-center gap-2 text-sm text-[#5b665e]">
              <input type="checkbox" className="h-4 w-4 rounded border-[#d0d8d0]" />
              Save this card for future purchases
            </label>
          </div>
        </section>

        <aside className="h-fit rounded-2xl border border-[#dde3dc] bg-white p-5 lg:col-span-4">
          <h3 className="text-3xl font-extrabold leading-none tracking-tight">Order Summary</h3>
          <p className="mb-4 mt-1 text-sm text-[#687267]">Review your items before paying</p>
          <div className="space-y-4 border-y border-[#e6ebe5] py-4">
            {items.length === 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-[#687267]">Your cart is empty. Add products to continue checkout.</p>
                <Link className="inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-white" to="/">
                  Browse products
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.productId} className="flex items-center gap-3">
                  <img src={item.product.image} alt={item.product.name} className="h-12 w-12 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{item.product.name}</p>
                    <p className="text-xs text-[#7d867f]">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">{formatPrice(item.lineTotal)}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <input className="h-10 flex-1 rounded-lg border border-[#d9ded9] px-3 text-sm" placeholder="Promo code" />
            <button className="rounded-lg bg-[#f1f3f1] px-4 text-sm font-semibold">Apply</button>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex justify-between text-[#6f796f]">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </p>
            <p className="flex justify-between text-[#6f796f]">
              <span>Shipping</span>
              <span className="text-primary">{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
            </p>
            <p className="flex justify-between text-[#6f796f]">
              <span>Estimated Tax</span>
              <span>{formatPrice(estimatedTax)}</span>
            </p>
          </div>

          <div className="mt-3 border-t border-[#e6ebe5] pt-3">
            <p className="flex items-end justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-3xl font-extrabold text-primary">{formatPrice(orderTotal)}</span>
            </p>
          </div>

          <button className="mt-4 w-full rounded-xl bg-primary py-3 text-lg font-bold text-white shadow-lg shadow-primary/25">
            Place Order →
          </button>
          <p className="mt-3 text-center text-xs text-[#7b867d]">Encrypted and Secure Payment</p>
        </aside>
      </div>
    </main>
  );
}
