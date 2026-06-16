import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100">
      
      
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center p-4 group-hover:opacity-90 transition-opacity">
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="object-contain h-full w-full mix-blend-multiply"
          priority={product.id <= 4} // Optimise le chargement des premières images au-dessus de la ligne de flottaison
        />
      </div>

     
      <div className="mt-4 flex flex-col grow">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>
        
        <p className="mt-1 text-xl font-bold text-blue-600">
          {product.price.toLocaleString("fr-MA", { style: "currency", currency: "MAD" })}
        </p>

        
        <div className="mt-4">
          <Link
            href={`/products/${product.slug}`}
            className="block w-full text-center bg-gray-900 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm"
          >
            Voir détails
          </Link>
        </div>
      </div>

    </div>
  );
}