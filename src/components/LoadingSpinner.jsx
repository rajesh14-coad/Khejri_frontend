
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-nature-green/30 rounded-full"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-t-brand-neon rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-brand-neon font-bold text-xs tracking-widest animate-pulse">LOADING</span>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
