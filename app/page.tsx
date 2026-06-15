import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
   <main>
    <h1>Ma Boutique</h1>
    <p> Découvrez notre sélection de produits
        technologiques.</p>
    <div>
      {products.map((product)=>
        (<ProductCard
        key={product.id}
        product={product}
        />
        ))}
    </div>

   </main>
  );
}
