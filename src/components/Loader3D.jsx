import React, { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

const Loader3D = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Animate loading progress
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
      {/* Simple loader instead of 3D scene */}
      <div className="w-32 h-32 relative mb-8">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-l-blue-500 border-t-purple-500 rounded-full"
          style={{ 
            transform: `rotate(${loadingProgress * 3.6}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{loadingProgress}%</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center">
        SoftDevIn
      </h2>
      <p className="text-gray-500 mt-2">Loading amazing experience...</p>
    </div>
  );
};

export default Loader3D;
