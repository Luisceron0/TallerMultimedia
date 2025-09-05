import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

const Practica1Comp = () => {
  const cubeTexture = useLoader(TextureLoader, "/assets/texture1.jpg");
  const sphereTexture = useLoader(TextureLoader, "/assets/texture2.jpg");
  const coneTexture = useLoader(TextureLoader, "/assets/alpha.png");

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Base: plano que actúa como suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Grupo 1: rotation={[8, 0, 0]}, position={[0, 0, 0]}, scale={[1, 1, 1]} */}
      <group rotation={[8, 0, 0]} position={[0, 0, 0]} scale={[1, 1, 1]} castShadow>
        <mesh position={[-4, 2, 0]} castShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial map={cubeTexture} />
        </mesh>
        <mesh position={[0, 2, 0]} castShadow>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial map={sphereTexture} />
        </mesh>
        <mesh position={[4, 1, 0]} castShadow>
          <coneGeometry args={[1, 3, 32]} />
          <meshStandardMaterial map={coneTexture} />
        </mesh>
      </group>

      {/* Grupo 2: rotation={[10, 0, 0]}, position={[10, 0, 0]}, scale={[1.2, 1.2, 1.2]} */}
      <group rotation={[10, 0, 0]} position={[10, 0, 0]} scale={[1.2, 1.2, 1.2]} castShadow>
        <mesh position={[-4, 2, 0]} castShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial map={cubeTexture} />
        </mesh>
        <mesh position={[0, 2, 0]} castShadow>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial map={sphereTexture} />
        </mesh>
        <mesh position={[4, 1, 0]} castShadow>
          <coneGeometry args={[1, 3, 32]} />
          <meshStandardMaterial map={coneTexture} />
        </mesh>
      </group>

      {/* Grupo 3: rotation={[15, 0, 0]}, position={[-10, 0, 0]}, scale={[0.8, 0.8, 0.8]} */}
      <group rotation={[15, 0, 0]} position={[-10, 0, 0]} scale={[0.8, 0.8, 0.8]} castShadow>
        <mesh position={[-4, 2, 0]} castShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial map={cubeTexture} />
        </mesh>
        <mesh position={[0, 2, 0]} castShadow>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial map={sphereTexture} />
        </mesh>
        <mesh position={[4, 1, 0]} castShadow>
          <coneGeometry args={[1, 3, 32]} />
          <meshStandardMaterial map={coneTexture} />
        </mesh>
      </group>
    </>
  );
};

export default Practica1Comp;
