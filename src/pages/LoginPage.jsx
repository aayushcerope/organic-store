import { useState } from "react";

export default function LoginPage() {
  const [activeForm, setActiveForm] = useState("login");

  const isLogin = activeForm === "login";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-green-50">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
        <section className="hidden md:flex bg-primary text-white p-10 items-end">
          <h2 className="text-4xl font-black">Organic food for a healthier you.</h2>
        </section>

        <section className="p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-500 mb-6">Please enter your details to continue.</p>

          <div className="inline-flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => setActiveForm("login")}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                isLogin ? "bg-white shadow text-black" : "text-gray-500"
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => setActiveForm("signup")}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                !isLogin ? "bg-white shadow text-black" : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <form className="space-y-4">
              <input className="w-full border rounded-lg p-3" placeholder="Email Address" type="email" />
              <input className="w-full border rounded-lg p-3" placeholder="Password" type="password" />
              <button type="button" className="w-full rounded-lg bg-primary text-white py-3 font-bold">
                Log In
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <input className="w-full border rounded-lg p-3" placeholder="Full Name" type="text" />
              <input className="w-full border rounded-lg p-3" placeholder="Email Address" type="email" />
              <input className="w-full border rounded-lg p-3" placeholder="Password" type="password" />
              <input className="w-full border rounded-lg p-3" placeholder="Confirm Password" type="password" />

              <button type="button" className="w-full rounded-lg bg-primary text-white py-3 font-bold">
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveForm("login")}
                  className="font-semibold text-primary"
                >
                  Switch to Login
                </button>
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
