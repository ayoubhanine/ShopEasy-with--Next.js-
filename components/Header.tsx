'use client';

import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <header className="bg-white/80 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
         TechStore<span className="text-blue-600">.</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Boutique
          </Link>
          
          <Link href="/cart" className="relative inline-flex items-center p-2 text-gray-600 hover:text-blue-600 transition-colors group">
            <span className="text-sm font-medium mr-2">Mon Panier</span>
            
            <div className="h-6 w-6 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center text-xs font-bold text-gray-900 transition-colors relative">
              {count > 0 ? (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full text-[10px] h-4 w-4 flex items-center justify-center animate-scaleIn">
                  {count}
                </span>
              ) : null}
              🛒
            </div>
          </Link>
        </nav>

      </div>
    </header>
  );
}