import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h2>{producto.name}</h2>
      <p>Precio: ${producto.price}</p>
      <p>Descripción: {producto.description}</p>
      <p>Stock: {producto.stock}</p>
    </div>
  );
};

export default ItemDetail;
