import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const Practica3 = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Práctica 3 - Luces en React Three Fiber</h3>

      <div style={{ height: "600px" }}>
        <Canvas
          className="position-absolute w-100 h-100"
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
          camera={{ position: [5, 5, 5], fov: 40 }}
        >
          <axesHelper args={[2]} />
          <Environment preset="studio" />

          {/* Luces */}
          <ambientLight intensity={0.5} color={0xffffff} />
          <directionalLight position={[1, 1, 1]} intensity={0.7} color={0xffcc00} />
          <hemisphereLight skyColor={0x0000ff} groundColor={0xff0000} intensity={0.6} />
          <pointLight position={[0, 1, 1]} intensity={1} distance={10} decay={2} color={0xff9000} />
          <spotLight position={[0, 2, 3]} intensity={2} distance={10} angle={Math.PI * 0.1} penumbra={0.25} decay={1} color={0x78ff00} />
          <rectAreaLight position={[-1.5, 0, 1.5]} intensity={5} width={3} height={3} color={0x4e00ff} />

          {/* Objetos */}
          <mesh position={[-1.5, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <meshStandardMaterial roughness={0.4} />
          </mesh>
          <mesh position={[1.5, 0, 0]}>
            <torusGeometry args={[0.3, 0.2, 32, 64]} />
            <meshStandardMaterial roughness={0.4} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]}>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial roughness={0.4} />
          </mesh>

          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Practica3;
