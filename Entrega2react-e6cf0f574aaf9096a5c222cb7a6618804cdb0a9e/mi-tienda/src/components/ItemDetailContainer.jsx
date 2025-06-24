import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(true);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
      } finally {
        setLoading(false);
        setShowCount(true);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleOnAdd = (cantidad) => {
    addItem(producto, cantidad);
    setShowCount(false);
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div>
      <ItemDetail producto={producto} />
      {showCount ? (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
