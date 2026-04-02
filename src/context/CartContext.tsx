import React, { createContext, useContext, useState, useEffect } from 'react';
import { Drink } from '../constants';

interface CartItem extends Drink {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Drink[];
  addToCart: (drink: Drink) => void;
  removeFromCart: (drinkId: string) => void;
  updateQuantity: (drinkId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (drink: Drink) => void;
  isInWishlist: (drinkId: string) => boolean;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Drink[]>([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('zen-brew-cart');
    const savedWishlist = localStorage.getItem('zen-brew-wishlist');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist from localStorage', e);
      }
    }
  }, []);

  // Save cart and wishlist to localStorage on change
  useEffect(() => {
    localStorage.setItem('zen-brew-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('zen-brew-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (drink: Drink) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === drink.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...drink, quantity: 1 }];
    });
  };

  const removeFromCart = (drinkId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== drinkId));
  };

  const updateQuantity = (drinkId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(drinkId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === drinkId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (drink: Drink) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === drink.id);
      if (exists) {
        return prev.filter(item => item.id !== drink.id);
      }
      return [...prev, drink];
    });
  };

  const isInWishlist = (drinkId: string) => {
    return wishlist.some(item => item.id === drinkId);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      wishlist,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      toggleWishlist,
      isInWishlist,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
