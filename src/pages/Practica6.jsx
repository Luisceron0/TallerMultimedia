import React from "react";
import CasaEscena from "../components/CasaFantasma";

const Practica6 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Practica 6: Exploración de la Escena Casa 3D</h3>

      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}>
        <CasaEscena />
      </div>
    </div>
  );
};

export default Practica6;
