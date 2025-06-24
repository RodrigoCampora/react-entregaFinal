import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (producto, cantidad) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.producto.id === producto.id);
      if (existingItem) {
        return prev.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prev, { producto, cantidad }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.producto.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.producto.price * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
