import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const Practica1 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Práctica 1 - Grupos con Rotaciones</h3>

      <div style={{ height: "600px" }}>
        <Canvas
          className="position-absolute w-100 h-100"
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
          camera={{ position: [10, 5, 10], fov: 40 }}
        >
          <axesHelper args={[2]} />
          <Environment preset="studio" />

          {/* Grupo 1 */}
          <group rotation={[8, 0, 0]}>
            <mesh position={[-4, 2, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[-2, 2, 0]}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial color="blue" />
            </mesh>
            <mesh position={[0, 2, 0]}>
              <coneGeometry args={[0.5, 1, 32]} />
              <meshStandardMaterial color="green" />
            </mesh>
          </group>

          {/* Grupo 2 */}
          <group rotation={[10, 0, 0]}>
            <mesh position={[-4, 0, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
              <meshStandardMaterial color="yellow" />
            </mesh>
            <mesh position={[-2, 0, 0]}>
              <torusGeometry args={[0.5, 0.2, 16, 100]} />
              <meshStandardMaterial color="purple" />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <octahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          </group>

          {/* Grupo 3 */}
          <group rotation={[15, 0, 0]}>
            <mesh position={[-4, -2, 0]}>
              <dodecahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="pink" />
            </mesh>
            <mesh position={[-2, -2, 0]}>
              <icosahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
            <mesh position={[0, -2, 0]}>
              <tetrahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="magenta" />
            </mesh>
          </group>

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Practica1;
