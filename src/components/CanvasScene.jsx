// src/components/CanvasScene.jsx (Optimized for Performance)
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Throttle function to limit execution frequency
const throttle = (callback, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return callback(...args);
  };
};

// Error boundary for WebGL context loss
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const handleContextLost = () => {
      console.log("WebGL context lost - disabling 3D scene");
      setHasError(true);
    };
    
    window.addEventListener('webglcontextlost', handleContextLost);
    return () => window.removeEventListener('webglcontextlost', handleContextLost);
  }, []);
  
  if (hasError) {
    return null; // Render nothing if context was lost
  }
  
  return children;
};

const CanvasScene = ({ isInHero, scrollProgress, rotationSpeed }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedQuality, setReducedQuality] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  // Detect Mobile Device and set quality
  useEffect(() => {
    const checkDevice = () => {
      const isMobileView = window.innerWidth < 768;
      // Be more aggressive about reducing quality
      const shouldReduceQuality = window.innerWidth < 1400 || 
                                 !window.navigator.hardwareConcurrency || 
                                 window.navigator.hardwareConcurrency <= 6;
      setIsMobile(isMobileView);
      setReducedQuality(shouldReduceQuality);
    };
    
    const throttledCheck = throttle(checkDevice, 200);
    checkDevice();
    
    window.addEventListener('resize', throttledCheck);
    return () => window.removeEventListener('resize', throttledCheck);
  }, []);

  // After first render, mark as rendered to avoid double rendering 
  useEffect(() => {
    setHasRendered(true);
  }, []);

  // Disable Canvas for Mobile to Improve Performance
  if (isMobile) return null;

  return (
    <ErrorBoundary>
      <div
        className={`fixed -top-40 lg:-top-20 z-[-1] h-full w-full transition-all duration-1000 ${
          isInHero ? 'right-0 w-1/2' : 'left-1/2 transform -translate-x-1/2 w-full'
        }`}
        style={{ pointerEvents: 'none' }}
      >
        {hasRendered && (
          <Canvas 
            camera={{ position: [0, 0, 5] }}
            gl={{ 
              powerPreference: 'default',
              antialias: !reducedQuality,
              alpha: true,
              depth: true,
              stencil: false,
              precision: reducedQuality ? 'lowp' : 'mediump',
            }}
            dpr={reducedQuality ? 0.7 : 1}
            performance={{ min: 0.3 }}
            onCreated={({ gl }) => {
              gl.dispose = function() {
                console.log('Manually disposing WebGL context');
                this.forceContextLoss();
                this.context = null;
                this.domElement = null;
              };
            }}
          >
            <ParallaxCamera />
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="sunset" />
            <RotatingIcosahedron 
              rotationSpeed={rotationSpeed} 
              scrollProgress={scrollProgress} 
              reducedQuality={reducedQuality}
            />
            {!reducedQuality && (
              <EffectComposer enabled={!reducedQuality}>
                <Bloom 
                  luminanceThreshold={0} 
                  luminanceSmoothing={0.9} 
                  height={300} 
                  opacity={0.6} 
                />
              </EffectComposer>
            )}
          </Canvas>
        )}
      </div>
    </ErrorBoundary>
  );
};

const RotatingIcosahedron = ({ rotationSpeed, scrollProgress, reducedQuality }) => {
  const meshRef = useRef();
  const startColor = useMemo(() => new THREE.Color('#8028ff'), []); // Purple
  const endColor = useMemo(() => new THREE.Color('#ffa400'), []);   // Orange
  
  // Improved performance with useMemo
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 0), []);
  const material = useMemo(() => (
    new THREE.MeshStandardMaterial({
      color: '#8028ff',
      metalness: 0.7,
      roughness: 0.2,
      emissive: '#5de0e6',
      emissiveIntensity: 0.5,
    })
  ), []);
  
  // Cleanup resources on unmount
  useEffect(() => {
    return () => {
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [geometry, material]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Only update every few frames on low-end devices
    const shouldUpdate = !reducedQuality || (state.clock.elapsedTime % 0.1 < delta);
    
    // Always rotate, but less frequently on low-end devices
    meshRef.current.rotation.x += delta * rotationSpeed * (reducedQuality ? 0.5 : 1);
    meshRef.current.rotation.y += delta * rotationSpeed * (reducedQuality ? 0.5 : 1);

    if (shouldUpdate) {
      // Interpolate scale based on scrollProgress (0 to 100)
      const factor = scrollProgress / 100;
      const newScale = 1 + factor * 0.3;
      meshRef.current.scale.set(newScale, newScale, newScale);

      // Smooth transition of color over scroll
      const currentColor = startColor.clone().lerp(endColor, factor);
      meshRef.current.material.color.set(currentColor);
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
};

const ParallaxCamera = () => {
  const { camera, mouse } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 5));
  const lastUpdate = useRef(0);

  useFrame((state) => {
    // Throttle updates for better performance
    if (state.clock.elapsedTime - lastUpdate.current < 0.1) return;
    
    // Smooth parallax effect based on cursor movement
    const maxOffset = 0.5; // Original value
    target.current.x = mouse.x * maxOffset;
    target.current.y = mouse.y * maxOffset;
    camera.position.lerp(target.current, 0.05); // Original value
    camera.lookAt(0, 0, 0);
    
    lastUpdate.current = state.clock.elapsedTime;
  });

  return null;
};

export default CanvasScene;
