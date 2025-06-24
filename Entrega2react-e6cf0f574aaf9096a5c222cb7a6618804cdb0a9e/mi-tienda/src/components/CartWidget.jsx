import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
      <img src="/cart-icon.png" alt="Carrito" style={{ width: 30, height: 30 }} />
      {totalQuantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: -5,
            right: -5,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
