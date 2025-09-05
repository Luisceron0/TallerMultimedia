import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Practica1Comp from "../components/Practica1Comp";

const Practica1 = () => {
  return (
    <Canvas
      className="position-absolute w-100 h-100"
      style={{ position: "fixed", width: "100vw", height: "100vh" }}
      camera={{ position: [20, 10, 20], fov: 40 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 20, 5]} intensity={1.2} />
      <Environment preset="city" />
      <Practica1Comp />
      <OrbitControls enableRotate={true} />
    </Canvas>
  );
};

export default Practica1;
