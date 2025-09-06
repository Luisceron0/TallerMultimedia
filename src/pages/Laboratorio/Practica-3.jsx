import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";

const Practica3 = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 5);
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffcc00, 0.7);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0x0000ff, 0xff0000, 0.6);
    scene.add(hemisphereLight);

    const pointLight = new THREE.PointLight(0xff9000, 1, 10, 2);
    pointLight.position.set(0, 1, 1);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0x78ff00, 2, 10, Math.PI * 0.1, 0.25, 1);
    spotLight.position.set(0, 2, 3);
    scene.add(spotLight);

    const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 5, 3, 3);
    rectAreaLight.position.set(-1.5, 0, 1.5);
    scene.add(rectAreaLight);

    // Objetos
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    sphere.position.x = -1.5;
    scene.add(sphere);

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.75, 0.75),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    scene.add(cube);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 32, 64),
      new THREE.MeshStandardMaterial({ color: 0x0000ff })
    );
    torus.position.x = 1.5;
    scene.add(torus);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5),
      new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    plane.rotation.x = -Math.PI * 0.5;
    plane.position.y = -0.65;
    scene.add(plane);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const gui = new GUI();
    gui.add(ambientLight, "intensity", 0, 3, 0.1).name("Ambient Intensity");
    gui.addColor({ color: ambientLight.color.getHex() }, "color")
      .name("Ambient Color")
      .onChange((value) => ambientLight.color.set(value));

    gui.add(directionalLight, "intensity", 0, 3, 0.1).name("Directional Intensity");
    gui.add(pointLight, "intensity", 0, 5, 0.1).name("Point Intensity");

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      gui.destroy();
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Practica3;
