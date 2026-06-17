
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // 1. On initialise le useState avec un tableau vide au départ
  const [cart, setCart] = useState<CartItem[]>([]);

  // 2. Premier useEffect : Se déclenche UNE SEULE fois au chargement du composant
  // Il va chercher si un panier existe déjà dans le localStorage du navigateur
  useEffect(() => {
    const savedCart = localStorage.getItem('mon_panier');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Erreur lors de la lecture du panier depuis le localStorage", error);
      }
    }
  }, []);

  // 3. Deuxième useEffect : Se déclenche à CHAQUE fois que la variable 'cart' change
  // Il sauvegarde automatiquement la nouvelle version du panier dans le localStorage
  useEffect(() => {
    // On met une condition pour éviter d'écraser le localStorage au tout premier rendu 
    // avant que le premier useEffect n'ait eu le temps de lire les données sauvegardées.
    if (cart.length > 0) {
      localStorage.setItem('mon_panier', JSON.stringify(cart));
    } else if (cart.length === 0 && localStorage.getItem('mon_panier')) {
      // Si le panier devient volontairement vide, on nettoie le localStorage
      localStorage.removeItem('mon_panier');
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

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

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
}