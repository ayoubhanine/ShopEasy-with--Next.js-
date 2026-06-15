import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          TechStore
        </Link>

        <nav className="flex gap-6">
          <Link
            href="/"
            className="font-medium hover:text-blue-600 transition"
          >
            Accueil
          </Link>

          <Link
            href="/cart"
            className="font-medium hover:text-blue-600 transition"
          >
            Panier
          </Link>
        </nav>

      </div>
    </header>
  );
}