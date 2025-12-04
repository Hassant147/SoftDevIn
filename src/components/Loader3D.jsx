import React, { useEffect, useState } from 'react';

const Loader3D = () => {
  const [progress, setProgress] = useState(30);
  const [secondary, setSecondary] = useState(10);

  // Lightweight looping progress to give the bars motion
  useEffect(() => {
    const primaryTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 15 : prev + 3));
    }, 40);

    const secondaryTimer = setInterval(() => {
      setSecondary((prev) => (prev >= 100 ? 5 : prev + 2));
    }, 55);

    return () => {
      clearInterval(primaryTimer);
      clearInterval(secondaryTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      {/* Soft glows */}
      <div className="absolute w-72 h-72 bg-primary-200/40 blur-3xl -top-12 -left-16" />
      <div className="absolute w-80 h-80 bg-cyan-200/40 blur-3xl bottom-0 right-0" />

      <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl shadow-primary-100/60 px-10 py-8 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-500 via-primary-300 to-primary-700 animate-spin shadow-lg shadow-primary-200/60" />
          <div className="absolute inset-[18%] rounded-full bg-white" />
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-600 animate-ping" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            SoftDevIn
          </h2>
          <p className="text-slate-500 text-sm">Preparing your experience...</p>
        </div>

        <div className="w-full space-y-2">
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 via-primary-300 to-primary-700 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 via-primary-300 to-primary-700 transition-all duration-400"
              style={{ width: `${secondary}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader3D;
