import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const PracticaJerarquia = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Práctica Jerarquía de Escena</h3>

      <div style={{ height: "600px" }}>
        <Canvas
          className="position-absolute w-100 h-100"
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
          camera={{ position: [10, 5, 10], fov: 40 }}
        >
          <axesHelper args={[2]} />

          {/* Luces */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* Suelo */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="lightgray" />
          </mesh>

          {/* Grupo con posición en Y */}
          <group position={[0, 2, 0]}>
            <mesh position={[-2, 0, 0]} castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[2, 0, 0]} castShadow>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </group>

          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default PracticaJerarquia;
