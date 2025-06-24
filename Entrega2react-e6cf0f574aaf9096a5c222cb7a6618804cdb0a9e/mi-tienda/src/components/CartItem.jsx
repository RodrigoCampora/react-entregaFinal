import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ producto, cantidad }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
      <h4>{producto.name}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Subtotal: ${producto.price * cantidad}</p>
      <button onClick={() => removeItem(producto.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
