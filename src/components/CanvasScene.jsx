// src/components/CanvasScene.jsx (Optimized for Performance)
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
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
  const [idleTime, setIdleTime] = useState(0);
  const lastActivityRef = useRef(Date.now());
  const canvasRef = useRef();
  
  // Function to measure idle time and pause rendering if inactive
  const checkIdleStatus = useCallback(() => {
    const now = Date.now();
    const timeSinceLastActivity = now - lastActivityRef.current;
    setIdleTime(timeSinceLastActivity);
    
    // If idle for more than 30 seconds, don't refresh the scene as often
    if (canvasRef.current && timeSinceLastActivity > 30000) {
      // Slow down frame rate when idle
      canvasRef.current.style.opacity = "0.3";
    } else if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }
  }, []);
  
  // Reset idle timer when user interacts
  const resetIdleTimer = useCallback(() => {
    lastActivityRef.current = Date.now();
    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }
  }, []);

  // Detect Mobile Device and set quality
  useEffect(() => {
    const checkDevice = () => {
      const isMobileView = window.innerWidth < 768;
      // Be more aggressive about reducing quality
      const shouldReduceQuality = window.innerWidth < 1200 || 
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
    
    // Setup idle timer and activity tracking
    const idleInterval = setInterval(checkIdleStatus, 5000);
    
    const userActivityEvents = [
      'mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'
    ];
    
    const handleUserActivity = throttle(resetIdleTimer, 200);
    
    userActivityEvents.forEach(eventType => {
      window.addEventListener(eventType, handleUserActivity, { passive: true });
    });
    
    return () => {
      clearInterval(idleInterval);
      userActivityEvents.forEach(eventType => {
        window.removeEventListener(eventType, handleUserActivity);
      });
    };
  }, [checkIdleStatus, resetIdleTimer]);

  // Force garbage collection and cleanup when component unmounts
  useEffect(() => {
    return () => {
      // Force garbage collection of 3D resources
      if (window.gc) window.gc();
      
      // Clear any cached resources
      THREE.Cache.clear();
    };
  }, []);

  // Disable Canvas for Mobile to Improve Performance
  if (isMobile) return null;
  
  // Reduce frame rate when idle for 30+ seconds
  const frameloop = idleTime > 30000 ? 'demand' : 'always';

  return (
    <ErrorBoundary>
      <div
        ref={canvasRef}
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
            dpr={reducedQuality ? 0.6 : 0.8} // Further reduce resolution
            performance={{ min: 0.2 }}
            frameloop={frameloop}
            onCreated={({ gl, scene }) => {
              gl.dispose = function() {
                console.log('Manually disposing WebGL context');
                this.forceContextLoss();
                this.context = null;
                this.domElement = null;
              };
              
              // Explicitly clean up scene when page unloads
              window.addEventListener('beforeunload', () => {
                scene.traverse((object) => {
                  if (object.geometry) object.geometry.dispose();
                  if (object.material) {
                    if (Array.isArray(object.material)) {
                      object.material.forEach(material => material.dispose());
                    } else {
                      object.material.dispose();
                    }
                  }
                });
                scene.dispose();
                gl.dispose();
              });
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
              idleTime={idleTime}
            />
            {!reducedQuality && idleTime < 10000 && (
              <EffectComposer enabled={!reducedQuality}>
                <Bloom 
                  luminanceThreshold={0} 
                  luminanceSmoothing={0.9} 
                  height={200} // Reduced from 300
                  opacity={0.5} // Reduced from 0.6
                />
              </EffectComposer>
            )}
          </Canvas>
        )}
      </div>
    </ErrorBoundary>
  );
};

const RotatingIcosahedron = ({ rotationSpeed, scrollProgress, reducedQuality, idleTime }) => {
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
    
    // If idle for long periods, reduce animation frequency drastically
    if (idleTime > 30000) {
      // Only update occasionally when idle
      if (Math.random() > 0.9) {
        meshRef.current.rotation.x += delta * rotationSpeed * 0.2;
        meshRef.current.rotation.y += delta * rotationSpeed * 0.2;
      }
      return;
    }

    // Only update every few frames on low-end devices
    const shouldUpdate = !reducedQuality || (state.clock.elapsedTime % 0.2 < delta);
    
    // Always rotate, but less frequently on low-end devices
    meshRef.current.rotation.x += delta * rotationSpeed * (reducedQuality ? 0.4 : 0.8);
    meshRef.current.rotation.y += delta * rotationSpeed * (reducedQuality ? 0.4 : 0.8);

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
    if (state.clock.elapsedTime - lastUpdate.current < 0.2) return; // Reduced from 0.1
    
    // Smooth parallax effect based on cursor movement
    const maxOffset = 0.3; // Reduced from 0.5
    target.current.x = mouse.x * maxOffset;
    target.current.y = mouse.y * maxOffset;
    camera.position.lerp(target.current, 0.03); // Reduced from 0.05
    camera.lookAt(0, 0, 0);
    
    lastUpdate.current = state.clock.elapsedTime;
  });

  return null;
};

export default CanvasScene;
