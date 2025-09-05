import React from "react";
import TiposLuces from "../components/TiposLuces";

const Practica4 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Practica 4: Uso de lil-gui en Three.js</h3>

      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}>
        <TiposLuces />
      </div>
    </div>
  );
};

export default Practica4;
