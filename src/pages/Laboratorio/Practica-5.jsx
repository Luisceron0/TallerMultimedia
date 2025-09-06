import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Practica5 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Práctica 5 - Materiales</h3>

      <div style={{ height: "600px" }}>
        <Canvas
          className="position-absolute w-100 h-100"
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
          camera={{ position: [5, 5, 5], fov: 40 }}
        >
          <axesHelper args={[2]} />

          {/* Luces */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          {/* Esfera con MeshStandardMaterial */}
          <mesh position={[-2, 0, 0]} castShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" metalness={0.5} roughness={0.5} />
          </mesh>

          {/* Cubo con MeshPhongMaterial */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="blue" shininess={100} />
          </mesh>

          {/* Cono con MeshLambertMaterial */}
          <mesh position={[2, 0, 0]} castShadow>
            <coneGeometry args={[1, 2, 32]} />
            <meshLambertMaterial color="green" />
          </mesh>

          {/* Suelo */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="gray" />
          </mesh>

          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Practica5;
