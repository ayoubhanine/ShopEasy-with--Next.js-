
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
 
  const { cart, getCartCount, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-MA', {
      style: 'currency',
      currency: 'MAD',
    });
  };

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
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4"
              >
              
                <div className="h-20 w-20 shrink-0 bg-gray-50 border border-gray-100 rounded-xl p-2 flex items-center justify-center mx-auto sm:mx-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-full mix-blend-multiply"
                  />
                </div>

              
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3 className="text-base font-semibold text-gray-950 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>

               
                <div className="flex items-center justify-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100 self-center">
                  <button
                    onClick={() => updateQuantity(item.id, 'decrement')}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm font-bold text-gray-600 hover:bg-gray-100 active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 'increment')}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm font-bold text-gray-600 hover:bg-gray-100 active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>

               
                <div className="flex sm:flex-col items-center justify-between sm:justify-center sm:items-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                  
                  
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 active:scale-95 transition-all duration-200"
                                        >
                      <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth={2} 
                                  stroke="currentColor" 
                                  className="w-3.5 h-3.5" >
 
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                              Supprimer
                            </button>
                              </div>
                            </div>
                          ))}
                        </div>

         
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