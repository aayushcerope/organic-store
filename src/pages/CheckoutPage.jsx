export default function CheckoutPage() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Secure Checkout</h1>
      <div className="grid lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-4">
          <h2 className="text-xl font-bold">Shipping Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['First Name','Last Name','Email Address','Street Address','City','ZIP Code'].map((f) => (
              <input key={f} className="border rounded-lg p-3" placeholder={f} />
            ))}
          </div>
          <h2 className="text-xl font-bold pt-4">Payment Method</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {['Credit Card','PayPal','Apple Pay'].map((m) => <button key={m} className="border rounded-lg p-4 hover:border-primary">{m}</button>)}
          </div>
        </section>
        <aside className="lg:col-span-5 border rounded-xl p-5 bg-white h-fit">
          <h3 className="text-xl font-bold mb-3">Order Summary</h3>
          <p className="mb-1">Organic Avocados x2 <span className="float-right">$12.00</span></p>
          <p className="mb-1">Fresh Whole Milk <span className="float-right">$8.50</span></p>
          <p className="mb-4">Red Apples <span className="float-right">$4.99</span></p>
          <hr className="mb-4" />
          <p className="font-bold text-lg">Total <span className="float-right text-primary">$27.53</span></p>
          <button className="mt-4 w-full rounded-lg bg-primary text-white py-3 font-bold">Place Order</button>
        </aside>
      </div>
    </main>
  );
}
