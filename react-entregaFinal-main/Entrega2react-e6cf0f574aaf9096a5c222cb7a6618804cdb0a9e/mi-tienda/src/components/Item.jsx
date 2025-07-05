import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";

async function agregarProducto() {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      title: "Remera Negra",
      price: 1500,
      stock: 10
    });
    console.log("Producto agregado con ID:", docRef.id);
  } catch (e) {
    console.error("Error agregando producto: ", e);
  }
}
