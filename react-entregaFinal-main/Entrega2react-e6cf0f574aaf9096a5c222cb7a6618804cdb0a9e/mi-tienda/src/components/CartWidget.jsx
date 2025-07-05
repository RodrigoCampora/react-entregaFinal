import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ position: "relative", display: "inline-block", fontSize: 24 }}>
      🛒
      {totalQuantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: -8,
            right: -8,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
