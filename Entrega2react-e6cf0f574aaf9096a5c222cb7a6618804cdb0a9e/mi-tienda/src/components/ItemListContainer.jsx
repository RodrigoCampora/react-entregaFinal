import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const productosCollection = collection(db, "products");

        const productosQuery = categoryId
          ? query(productosCollection, where("category", "==", categoryId))
          : productosCollection;

        const productosSnapshot = await getDocs(productosQuery);

        const listaProductos = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProductos(listaProductos);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos para mostrar</p>;

  return (
    <div>
      <h2>{mensaje}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
