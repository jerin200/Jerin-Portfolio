import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const DataCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    
    // Rotate node system
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.05;

    // React to scroll: Move and scale
    const scroll = scrollYProgress.get();
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, scroll * 3, 0.1);
    const targetScale = 1 - scroll * 0.4;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Inner Core */}
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};
