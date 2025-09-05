import React from "react";
import SombrasEscena from "../components/SombrasEscena";

const Practica5 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Practica 5: Análisis de Sombras y Materiales</h3>

      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}>
        <SombrasEscena />
      </div>
    </div>
  );
};

export default Practica5;
