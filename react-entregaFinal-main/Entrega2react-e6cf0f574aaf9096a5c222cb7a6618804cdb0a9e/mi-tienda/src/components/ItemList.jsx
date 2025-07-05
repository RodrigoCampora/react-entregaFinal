import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>
          <Link to={`/product/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <strong>{producto.title}</strong> - ${producto.price} - Stock: {producto.stock}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
