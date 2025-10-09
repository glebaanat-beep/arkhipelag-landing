import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AddOn {
  id: string;
  titleKey: string;
  price: number;
}

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  basePrice: number;
  category: 'cultural' | 'sea' | 'adventure' | 'extreme';
  addOns: AddOn[];
}

export interface CartItem {
  service: Service;
  selectedAddOns: AddOn[];
  subtotal: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (service: Service, selectedAddOns: AddOn[]) => void;
  removeFromCart: (serviceId: string) => void;
  updateCartItem: (serviceId: string, selectedAddOns: AddOn[]) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (service: Service, selectedAddOns: AddOn[]) => {
    const subtotal = service.basePrice + selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    
    // Check if service already exists in cart
    const existingIndex = cart.findIndex(item => item.service.id === service.id);
    
    if (existingIndex >= 0) {
      // Update existing item
      const updatedCart = [...cart];
      updatedCart[existingIndex] = { service, selectedAddOns, subtotal };
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, { service, selectedAddOns, subtotal }]);
    }
  };

  const removeFromCart = (serviceId: string) => {
    setCart(cart.filter(item => item.service.id !== serviceId));
  };

  const updateCartItem = (serviceId: string, selectedAddOns: AddOn[]) => {
    const itemIndex = cart.findIndex(item => item.service.id === serviceId);
    if (itemIndex >= 0) {
      const service = cart[itemIndex].service;
      const subtotal = service.basePrice + selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
      const updatedCart = [...cart];
      updatedCart[itemIndex] = { service, selectedAddOns, subtotal };
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.subtotal, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
