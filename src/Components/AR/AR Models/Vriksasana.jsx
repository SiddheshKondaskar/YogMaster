/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Models/vriksasana.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Vriksasana(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/vriksasana.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[7.36, 4.96, 6.93]} rotation={[1.24, 0.33, -0.76]} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Alpha_Joints" geometry={nodes.Alpha_Joints.geometry} material={materials.Alpha_Joints_MAT} skeleton={nodes.Alpha_Joints.skeleton} />
          <skinnedMesh name="Alpha_Surface" geometry={nodes.Alpha_Surface.geometry} material={materials.Alpha_Body_MAT} skeleton={nodes.Alpha_Surface.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Vriksasana; 
useGLTF.preload('/vriksasana.glb')
