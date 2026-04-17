import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

// --- GALAXY COMPONENT (Faces User) ---
const Galaxy = () => {
    const pointsRef = useRef();
    const count = 8000;
    const { mouse } = useThree();

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorInside = new THREE.Color('#F2F87E');
        const colorOutside = new THREE.Color('#333333');

        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 8;
            const spinAngle = radius * 5;
            const branchAngle = ((i % 3) / 3) * Math.PI * 2;

            // randomness
            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius / 5);
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius / 5);
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.5 + radius / 5);

            // XY Plane Logic (Face User)
            // x = cos, y = sin, z = flat thickness
            positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i * 3 + 1] = Math.sin(branchAngle + spinAngle) * radius + randomY;
            positions[i * 3 + 2] = randomZ / 2; // Flat Galaxy thickness

            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, radius / 8);

            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (pointsRef.current) {
            // Rotate around Z axis (spin like a wheel)
            pointsRef.current.rotation.z += 0.001;

            // Mouse Parallax (Tilt)
            const targetRotationX = mouse.y * 0.1;
            const targetRotationY = mouse.x * 0.1;

            pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.05);
            pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.05);
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.03} sizeAttenuation={true} depthWrite={false} vertexColors={true} blending={THREE.AdditiveBlending} transparent={true} opacity={0.8} />
        </points>
    );
};

// --- ART SAKURA TREE (Ink Style) ---
const SakuraArtTree = () => {
    // Generate a smooth curve for the trunk
    const trunkCurve = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -6, 0),
            new THREE.Vector3(0.5, -3, 0),
            new THREE.Vector3(-0.5, 0, 0), // Gentle S-curve
            new THREE.Vector3(1, 4, 0),
        ]);
        return curve;
    }, []);

    // Create dense particle clouds for foliage
    const FoliageCloud = ({ position, scale, count }) => {
        return (
            <Sparkles
                position={position}
                scale={scale}
                count={count}
                size={6}
                speed={0.2}
                opacity={0.8}
                color="#ffb7b2"
            />
        );
    };

    return (
        <group position={[6, -2, -6]} rotation={[0, -0.6, 0]} scale={1.2}>
            {/* Artistic Trunk (Thick Line/Tube) */}
            <mesh>
                <tubeGeometry args={[trunkCurve, 20, 0.4, 8, false]} />
                <meshStandardMaterial color="#3e2723" roughness={1} />
            </mesh>

            {/* The Canopy (Clouds of blossoms) */}
            <FoliageCloud position={[1, 5, 0]} scale={[5, 4, 5]} count={600} />
            <FoliageCloud position={[-1.5, 3.5, 1]} scale={[4, 3, 4]} count={400} />
            <FoliageCloud position={[2.5, 3, -1]} scale={[4, 3, 4]} count={400} />

            {/* Falling Petals Source */}
            <Sparkles
                count={100}
                scale={[8, 8, 8]}
                position={[0, 4, 0]}
                size={8}
                speed={0.5}
                opacity={1}
                color="#ffc0cb"
            />
        </group>
    );
};

// --- REALISTIC FALLING PETALS (Global) ---
const FallingSakura = () => {
    const count = 250;
    const mesh = useRef();

    const petalShape = useMemo(() => {
        const shape = new THREE.Shape();
        const x = 0, y = 0;
        shape.moveTo(x, y);
        shape.bezierCurveTo(x + 5, y + 5, x + 5, y + 15, x, y + 20);
        shape.bezierCurveTo(x - 5, y + 15, x - 5, y + 5, x, y);
        return shape;
    }, []);

    const particles = useMemo(() => {
        return new Array(count).fill().map(() => ({
            x: (Math.random() - 0.5) * 40,
            y: Math.random() * 20 + 5,
            z: (Math.random() - 0.5) * 20,
            speed: Math.random() * 0.03 + 0.015,
            rotationSpace: Math.random(),
            rotationSpeed: Math.random() * 0.02
        }));
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((particle, i) => {
            particle.y -= particle.speed;
            particle.x += Math.sin(time + particle.rotationSpace) * 0.02; // Sway

            if (particle.y < -12) {
                particle.y = 15;
                particle.x = (Math.random() - 0.5) * 40;
            }

            const dummy = new THREE.Object3D();
            dummy.position.set(particle.x, particle.y, particle.z);
            dummy.rotation.set(
                particle.rotationSpace + time * 0.5,
                particle.rotationSpace + time * 0.3,
                particle.rotationSpace
            );
            dummy.scale.set(0.03, 0.03, 0.03);
            dummy.updateMatrix();
            if (mesh.current) {
                mesh.current.setMatrixAt(i, dummy.matrix);
            }
        });
        if (mesh.current) {
            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <shapeGeometry args={[petalShape]} />
            <meshStandardMaterial
                color="#ffc0cb"
                emissive="#ff9aa2"
                emissiveIntensity={0.6}
                side={THREE.DoubleSide}
                transparent
                opacity={0.9}
            />
        </instancedMesh>
    );
};

const WaterBackground = () => {
    const { theme } = useTheme();
    const isJapanese = theme === 'sakura';

    return (
        <div className="water-canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                {isJapanese ? (
                    <>
                        <color attach="background" args={['#fcfaf2']} />
                        <ambientLight intensity={1.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <SakuraArtTree />
                        <FallingSakura />
                        <fog attach="fog" args={['#fcfaf2', 5, 30]} />
                    </>
                ) : (
                    <>
                        <color attach="background" args={['#0a0a0a']} />
                        <Stars radius={100} depth={60} count={3000} factor={4} saturation={0} fade speed={1} />
                        <Galaxy />
                        <ambientLight intensity={0.1} />
                    </>
                )}
            </Canvas>
        </div>
    );
};

export default WaterBackground;
