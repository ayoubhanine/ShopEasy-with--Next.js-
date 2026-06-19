
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void; 
  updateQuantity: (productId: number, action: 'increment' | 'decrement') => void; 
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Charger le panier au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem('mon_panier');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Erreur localStorage", error);
      }
    }
  }, []);

  // Sauvegarder le panier à chaque modification
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('mon_panier', JSON.stringify(cart));
    } else {
      localStorage.removeItem('mon_panier');
    }
  }, [cart]);

 
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 },
      ];
    });
  };


  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

 // Modifier la quantité (+ / -)
  const updateQuantity = (productId: number, action: 'increment' | 'decrement') => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        // Si la quantité tombe à 0 ou moins, on retire automatiquement l'article du panier
        .filter((item) => item.quantity > 0);
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartCount }}>
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