import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Hero / Présentation */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Ma <span className="text-blue-600">Boutique</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-5">
          Découvrez notre sélection exclusive de produits technologiques de pointe, 
          conçus pour simplifier votre quotidien.
        </p>
      </div>

      {/* Grille de Produits Responsive */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}