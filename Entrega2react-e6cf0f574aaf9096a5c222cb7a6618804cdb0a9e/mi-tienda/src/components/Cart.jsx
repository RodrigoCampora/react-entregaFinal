import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, clearCart, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div>
      {cartItems.map(({ producto, cantidad }) => (
        <CartItem key={producto.id} producto={producto} cantidad={cantidad} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
