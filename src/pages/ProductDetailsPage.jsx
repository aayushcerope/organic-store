import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-6 flex gap-2 text-sm">
        <Link to="/" className="text-primary">Home</Link> / <span>Product</span>
      </div>
      <section className="grid lg:grid-cols-2 gap-8">
        <img
          className="rounded-2xl w-full h-[420px] object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlBTjZA_1493RUVFkTYFkzrqtVs9dbD9nDjC9_XXNssEV0rNUFZoCBgTOFFVF3uKEqH--EhDvVlX_fMOLrHIFA4vb-1JE8D8qNJnqY9p6a9Krk3yPLHVC0F1DeNS8z4Ok-nI4nj2cqNz6_TJcg4jRn-CjO87hBl-Qim-faFVNdYNSmc6ZWCnA5P3ks1NK-IEaO4XH9NLFZ6Mmp8CKBoAeDaT9TWkQ8yemJ_dQ9FfdZqGqb5icgNf1DhLJ5qOVCYIGi2AP2apN5jhce"
          alt="Organic carrots"
        />
        <div>
          <h1 className="text-4xl font-bold mb-3">Organic Bunched Carrots</h1>
          <p className="text-2xl font-black text-primary mb-4">$2.99 / bunch</p>
          <p className="text-gray-600 mb-6">Sweet, crunchy, and freshly harvested from local certified organic farms.</p>
          <div className="flex gap-3 mb-8">
            <button className="px-4 py-2 rounded-lg border">-</button>
            <span className="px-4 py-2 rounded-lg border">1</span>
            <button className="px-4 py-2 rounded-lg border">+</button>
          </div>
          <button className="px-8 py-3 rounded-lg bg-primary text-white font-bold">Add to Cart</button>
        </div>
      </section>
    </main>
  );
}
