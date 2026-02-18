export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary-light bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Organic Store. Fresh from farm to your doorstep.</p>
        <p className="font-medium text-primary">Healthy choices, delivered daily.</p>
      </div>
    </footer>
  );
}
