// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de tenerlo

const firebaseConfig = {
  apiKey: "AIzaSyBXJ1zVIBTCDA2a-8AANbuYuqIY-vPwKzc",
  authDomain: "mi-tienda-react-e45bd.firebaseapp.com",
  projectId: "mi-tienda-react-e45bd",
  storageBucket: "mi-tienda-react-e45bd.appspot.com", // corregido: debe ser .appspot.com
  messagingSenderId: "525918475260",
  appId: "1:525918475260:web:0111b628997e41a133d879"
};

// Inicializa la app
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
export const db = getFirestore(app);
