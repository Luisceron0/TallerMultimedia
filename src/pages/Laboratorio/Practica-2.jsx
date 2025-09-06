import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Practica2 = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuración del renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Crear la escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Ejes de ayuda
    const axesHelper = new THREE.AxesHelper(2);
    scene.add(axesHelper);

    // Grupo de objetos
    const group = new THREE.Group();
    scene.add(group);

    // Crear 3 cubos
    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    cube1.position.x = -2;
    group.add(cube1);

    const cube2 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    );
    group.add(cube2);

    const cube3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0x0000ff })
    );
    cube3.position.x = 2;
    group.add(cube3);

    // Aplicar transformaciones al grupo
    group.rotation.y = Math.PI / 4;
    group.scale.set(1.5, 1.5, 1.5);
    group.position.set(0, 2, 0);

    // Configuración de la cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 10);
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Practica2;
