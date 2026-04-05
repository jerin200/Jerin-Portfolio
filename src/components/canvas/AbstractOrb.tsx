import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export const AbstractOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    
    // Rotate orb slowly
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;

    // React to scroll: Move orb up and scale it down slightly
    const scroll = scrollYProgress.get();
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, scroll * 2, 0.1);
    const targetScale = 1 - scroll * 0.3;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 32]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.4}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#5227FF"
          color="#B19EEF"
        />
      </mesh>
      <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.3} color="#B19EEF" />
    </Float>
  );
};
