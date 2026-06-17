// src/components/CartContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // 1. Vérifier si le produit est déjà dans le panier
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // 2. Si oui, on incrémente sa quantité
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 3. Si non, on l'ajoute avec une quantité initiale de 1
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  };

  // Fonction utilitaire pour calculer le nombre total d'articles (pour le Header)
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour utiliser le panier facilement
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
}