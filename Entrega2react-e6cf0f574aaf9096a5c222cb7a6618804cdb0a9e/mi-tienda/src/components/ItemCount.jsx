import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <div>
        <button onClick={handleSubtract}>-</button>
        <span style={{ margin: "0 1rem" }}>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={handleAddToCart} style={{ marginTop: "1rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
