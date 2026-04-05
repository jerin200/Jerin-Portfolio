import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const Artifact = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    // Rotate the outer group slowly
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {/* Position dead center, unscaled to retain original framing */}
      <group ref={groupRef} position={[0, 0, 0]}>

        <mesh>
          <icosahedronGeometry args={[2, 2]} />
          
          {/* Simple, colorless, subtle wireframe as requested */}
          <meshBasicMaterial
            color="#ffffff"
            wireframe={true}
            transparent={true}
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

      </group>
    </Float>
  );
};
