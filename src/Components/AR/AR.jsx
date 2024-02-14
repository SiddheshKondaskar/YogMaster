import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Vriksasana from "./AR Models/Vriksasana";
import Padmasana from "./AR Models/Padmasana";
import Utkatasana from "./AR Models/Utkatasana";
import Utthita from "./AR Models/Utthita_trikonasana";
import Adho from "./AR Models/Adho_mukha_svanasana";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function AR(props) {
  const [Pose] = useState(props.data);
  return (
    <div style={{ width: "600px", height: "450px" }}>
      <Canvas camera={{ position: [5, 1.5, 2.5], fov: 30 }} shadows>
        {/* <Environment files="./venice_sunset_1k.hdr" background blur={0.5} /> */}
        <Environment preset="forest" background />
        <OrbitControls autoRotate />
        <ambientLight />
        <directionalLight
          position={[-5, -5, -5]}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
        />

        <group position={[0, -1, 0]}>
          {Pose === "Vriksasana" ? (
            <Vriksasana />
          ) : Pose === "Padmasana" ? (
            <Padmasana />
          ) : Pose === "Adho Mukha Svanasana" ? (
            <Adho />
          ) : Pose === "Utkatasana" ? (
            <Utkatasana />
          ) : Pose === "Utthita Trikonasana" ? (
            <Utthita />
          ) : (
            <Navigate to="/home" />
          )}
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}
//npx gltfjsx public/Models/utkatasana.glb
// Command to Convert The glb file to jsx
