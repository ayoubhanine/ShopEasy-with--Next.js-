// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { products } from "@/data/products";

// interface ProductPageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// // 1. On transforme la fonction en composant asynchrone (async)
// export default async function ProductDetailPage({ params }: ProductPageProps) {
//   // 2. On "déballe" la Promise params à l'aide de await

//   const { slug } = await params;

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="mb-8">
//           <Link
//             href="/"
//             className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
//           >
//             ← Retour au catalogue
//           </Link>
//         </div>

//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
//           <div className="aspect-square w-full bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="object-contain max-h-100 w-auto mix-blend-multiply"
//               priority
//             />
//           </div>

//           <div className="flex flex-col justify-between">
//             <div>
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 uppercase tracking-wider mb-4">
//                 {product.categorie}
//               </span>

//               <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//                 {product.name}
//               </h1>

//               <p className="mt-4 text-3xl font-bold text-blue-600">
//                 {product.price.toLocaleString("fr-MA", {
//                   style: "currency",
//                   currency: "MAD",
//                 })}
//               </p>

//               <hr className="my-6 border-gray-200" />

//               <div className="space-y-4">
//                 <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                   Description du produit
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8">
//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 text-base">
//                 Ajouter au panier
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
// src/app/products/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton"; // <-- Importation ici

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            ← Retour au catalogue
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
          <div className="aspect-square w-full bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain max-h-100 w-auto mix-blend-multiply"
              priority
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 uppercase tracking-wider mb-4">
                {product.categorie}
              </span>

              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-3xl font-bold text-blue-600">
                {product.price.toLocaleString("fr-MA", {
                  style: "currency",
                  currency: "MAD",
                })}
              </p>

              <hr className="my-6 border-gray-200" />

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Description du produit
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-8">
              {/* Remplacement du bouton classique par notre bouton client connecté au context */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
