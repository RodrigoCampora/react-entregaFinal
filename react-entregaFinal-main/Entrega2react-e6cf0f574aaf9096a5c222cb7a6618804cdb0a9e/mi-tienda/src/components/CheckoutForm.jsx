import React, { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const [ordenGenerada, setOrdenGenerada] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de generación de orden
    const orden = {
      id: Math.floor(Math.random() * 1000000),
      ...formData,
    };

    setOrdenGenerada(orden);
  };

  if (ordenGenerada) {
    return (
      <div style={styles.container}>
        <h2>¡Gracias por tu compra, {ordenGenerada.nombre}!</h2>
        <p>Te enviaremos un correo a <strong>{ordenGenerada.email}</strong> con los detalles.</p>
        <p><strong>ID de orden:</strong> #{ordenGenerada.id}</p>
        <p><strong>Dirección:</strong> {ordenGenerada.direccion}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre:
          <input
            style={styles.input}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Dirección:
          <input
            style={styles.input}
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

// Estilos en JS
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default CheckoutForm;
