import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center relative mb-12">
      <div className="z-10 text-center space-y-4">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-white font-mono select-none">
          MNV
        </h1>
        <div className="flex flex-col items-center gap-2">
           <span className="h-px w-24 bg-white/50"></span>
           <p className="text-sm font-mono tracking-[0.2em] text-neutral-400 uppercase">
             Portfolio / Works
           </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;