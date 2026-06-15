export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto py-6 px-6 text-center">
        <p className="font-semibold">TechStore</p>

        <p className="text-sm text-gray-400 mt-2">
          © {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}