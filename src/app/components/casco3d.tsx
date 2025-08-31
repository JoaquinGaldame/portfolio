"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/casco.glb");
  const ref = useRef<THREE.Object3D>(null);
  const [scale, setScale] = useState(0.1);

  useFrame(() => {
    if (ref.current && scale < 2) {
      setScale((prev) => Math.min(prev + 0.05, 2)); // escala suave hasta 2
    }
    if (ref.current) {
      ref.current.rotation.y += 0.003; // giro muy leve
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function Casco3D() {
  return (
    <div className="w-[700px] h-[500px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Luces */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[0, 2, 5]} intensity={2} color="white" />

        {/* Casco */}
        <Model />

        {/* Control para girar */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}