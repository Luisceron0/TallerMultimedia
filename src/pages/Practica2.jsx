import React from "react";
import Practica2Comp from "../components/Practica2Comp";

const Practica2 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Practica 2: Agrupación con Three.js</h3>

      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}>
        <Practica2Comp />
      </div>
    </div>
  );
};

export default Practica2;
