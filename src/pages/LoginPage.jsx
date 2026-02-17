export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-green-50">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
        <section className="hidden md:flex bg-primary text-white p-10 items-end">
          <h2 className="text-4xl font-black">Organic food for a healthier you.</h2>
        </section>
        <section className="p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-500 mb-6">Please enter your details to continue.</p>
          <form className="space-y-4">
            <input className="w-full border rounded-lg p-3" placeholder="Email Address" type="email" />
            <input className="w-full border rounded-lg p-3" placeholder="Password" type="password" />
            <button type="button" className="w-full rounded-lg bg-primary text-white py-3 font-bold">Log In</button>
          </form>
        </section>
      </div>
    </main>
  );
}
