'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);

  // Generate random points in a sphere
  const [positions, colorArray] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#00d4ff'); // Cyan
    const color2 = new THREE.Color('#a855f7'); // Purple

    for (let i = 0; i < count * 3; i += 3) {
      // Math to generate points on a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const radius = 1.5 + Math.random() * 0.5; // Radius between 1.5 and 2.0

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      // Mix colors based on position
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colorArray} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
