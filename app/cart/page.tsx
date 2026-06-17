// src/app/cart/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { cart, getCartCount } = useCart();

  // Calcul du prix total global du panier
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Formatage des prix en Dirham Marocain (MAD)
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-MA', {
      style: 'currency',
      currency: 'MAD',
    });
  };

  // Cas où le panier est vide
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Votre panier est vide</h1>
          <p className="text-gray-500 mb-6">
            Il semblerait que vous n'ayez pas encore ajouté de produits à votre panier.
          </p>
          <Link
            href="/"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Découvrir nos produits
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
          Mon Panier ({getCartCount()} {getCartCount() > 1 ? 'articles' : 'article'})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des produits (Prend 2 colonnes sur grand écran) */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4"
              >
                {/* Image miniature avec le composant Next.js Image */}
                <div className="h-20 w-20 shrink-0 bg-gray-50 border border-gray-100 rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-full mix-blend-multiply"
                  />
                </div>

                {/* Détails du produit */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-950 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mt-1">
                    {formatPrice(item.price)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Quantité : <span className="font-semibold text-gray-700">{item.quantity}</span>
                  </p>
                </div>

                {/* Sous-total pour cet article */}
                <div className="text-right font-bold text-gray-900 text-sm sm:text-base">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* Résumé de la commande (Prend 1 colonne) */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-fit space-y-6">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">
              Résumé de la commande
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Total articles</span>
                <span className="font-semibold text-gray-900">{getCartCount()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Frais de livraison</span>
                <span className="text-green-600 font-medium">Gratuit</span>
              </div>
              <hr className="border-gray-100 my-2" />
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2">
                <span>Montant total</span>
                <span className="text-blue-600 text-lg">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-center text-sm shadow-sm">
              Procéder au paiement
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}