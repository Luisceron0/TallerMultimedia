import React from "react";
import Practica3Comp from "../components/Practica3Comp";

const Practica3 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Practica 3: Análisis de Luces en Three.js y React Three Fiber</h3>

      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}>
        <Practica3Comp />
      </div>
    </div>
  );
};

export default Practica3;
