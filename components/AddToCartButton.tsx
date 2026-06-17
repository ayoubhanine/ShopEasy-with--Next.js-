// src/components/AddToCartButton.tsx
'use client';

import { useCart } from './CartContext';
import { Product } from '@/types/Product';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 text-base"
    >
      Ajouter au panier
    </button>
  );
}