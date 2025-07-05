import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

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

      <br />

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
