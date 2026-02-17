import { Link } from "react-router-dom";

const products = [
  ["Organic Tomato", "₹40/kg", "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMz5Zy7le7dv-XIN2bQHWdE4SwbxHE7haGoabiWcZGePL2fEoi4eYWzc3fTs94hKuIce4mVNv8pXPMrwcYy7C6u83RlQzjbIGCaIOJbTUZXehO4vu0KxJ8bjzr0fViLK1kWpU7s8rgkoeFFw02eb0NdMEwWOrqWBtr3AQDItlkDQAVT5hI6ei9S9DHsRmIuP_9hj4GLzYh8kJkXtUaYxbqje-tCqXExDu2Mu78q3EZYNjyDVGWCEArkgEO-Hd-LzA1IDcAeglnuoj"],
  ["Fresh Spinach", "₹20/bunch", "https://lh3.googleusercontent.com/aida-public/AB6AXuDurpRIy_1GDEhZMj5PvLPFhAJN1U3T5HPEYk3K-oxcnSfKf9i95sDo7RTZ8mCZLFMv_BxvB2lNx70S2NOoPRkG9wx0CIXaN2HeSys79fmKoSioTmyCbXnTUz6tmcGWCHpvdf7ZLGr4SEWPtVeV1bOhPG14nfpQ1TXdfJFZbLvOHBhXoVDRGXq01xBEJPGjtBTVWJuNWp1BRbUCqRhYdquanXxatEUTqfWPGpjUMu_9CZ7zTF8VXB6BWge9bXrWaIoPC0a5i39Ykhyo"],
  ["Raw Cow Milk", "₹70/L", "https://lh3.googleusercontent.com/aida-public/AB6AXuBWq7swMIi41ChhzSMvM-5rg04wUwedy3VoUQPqQ-xzhzZiYdUwgn95ClisUIbSLjNrz5XbkzPfOCdSNFbH1hbT9XvxS5AsxtxOR4lmLFVRSM26sOb1NCyt7utuAdrL1d6ogpkGl2qwd4G-LCYdSyMsRGRIsZAGod3fRTuiR9jLOnVdlX48VTfA73X3-cVSQ8wz20KpqsaDm5Ph78o4AqchyMC3l2HtUr0iAVMIzMKVbWk8HML2yiwlzdGtOe2HIk9S6mh3_faRANu5"],
  ["Kashmiri Apple", "₹120/kg", "https://lh3.googleusercontent.com/aida-public/AB6AXuAdAehAxmlqGQt0cgf3NP34eX_VII9tAa1e7dn8a2i96HyMjxI11-yiJdJn_3rySTMIa404QKSOqW9pZxkvzGId7tAsG1uiANeEDNa83aSicin_P8OjUhuidaA46LXvNk-Z7Djwq1EX_mQJa3s4FLv9bTXHd2ATaGwy-T5x11Up8R_aqrdsY4dK-3Gte1no03i62QVc4nUoRdeBQMGqTmo3FQAc6YybFs6G0-YtZtSZlEfuAeAEip8uzIXCRDtjf9f_wVGLZ3TyLW3i"]
];

export default function HomePage() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur border-b border-primary-light">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <h1 className="font-black text-2xl text-primary">Organic Store</h1>
          <nav className="flex gap-2 text-sm">
            <Link className="px-3 py-2 rounded-full bg-primary text-white" to="/">Home</Link>
            <Link className="px-3 py-2 rounded-full bg-primary/10" to="/product">Product</Link>
            <Link className="px-3 py-2 rounded-full bg-primary/10" to="/checkout">Checkout</Link>
            <Link className="px-3 py-2 rounded-full bg-primary/10" to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-10">
        <section className="relative rounded-2xl overflow-hidden min-h-[340px] flex items-center p-10 text-white" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmxpKnYb65Xy5L5UVE03MXQV7Efb88RuMWAYqzvdbpGF8HCQaZ-VmFLO72LuKGyw_xMMUchMcdhcH3M_6RyJUYrjr0dVHI0OKEYt8A7FkQvAiu_NnQ7lIitDqskACdPHEeyi1sEwnJlo2QVErI_Za8UXFAXH8TdLV0lNU0ycs-qzpICmSbJ3yxtuxNxC5jGHl_biwS_-cjpF1-9bwjk0HIYSXP24PggkrG63CW2uKvcOgFM4CqqVIAumEiDB71evtqoswIZQ8kVPa6')", backgroundSize: "cover" }}>
          <div>
            <p className="text-sm font-bold mb-2">100% ORGANIC & FRESH</p>
            <h2 className="text-4xl md:text-6xl font-black">Fresh & Natural Everyday</h2>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-5">Browse Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(([name, price, image]) => (
              <article key={name} className="bg-white border border-primary-light rounded-xl overflow-hidden hover:shadow-lg transition">
                <img className="h-56 w-full object-cover" src={image} alt={name} />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{name}</h4>
                  <p className="text-primary font-bold">{price}</p>
                  <button className="mt-3 w-full rounded-lg bg-primary text-white py-2">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
