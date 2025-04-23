import { useState, useEffect } from 'react';

/**
 * Hook to detect low-end devices based on hardware concurrency and viewport size.
 * Returns an object { isLowEnd }.
 */
export function usePerformance() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const concurrency = navigator.hardwareConcurrency || 4;
      const low = concurrency <= 4 || window.innerWidth < 1024;
      setIsLowEnd(low);
    };

    const throttled = () => {
      checkPerformance();
    };
    checkPerformance();

    window.addEventListener('resize', throttled);
    return () => window.removeEventListener('resize', throttled);
  }, []);

  return { isLowEnd };
} 