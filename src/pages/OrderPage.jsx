import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-extrabold text-primary">Order Placed</h1>
      <p className="mt-3 text-[#5f695f]">Thank you! Your order has been placed successfully.</p>
      <Link className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-white" to="/">
        Continue Shopping
      </Link>
    </main>
  );
}
