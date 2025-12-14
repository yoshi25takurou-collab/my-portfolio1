import React from 'react';
import { ProfileData } from '../types';

interface ProfileProps {
  data: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <section id="about" className="max-w-6xl mx-auto scroll-mt-24">
      <div className="flex items-baseline justify-between border-b border-white/20 pb-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight font-mono text-white">
          About
        </h2>
        <span className="hidden md:block text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Profile Data
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-px bg-neutral-900 border border-neutral-800 h-fit">
          {/* Info Rows */}
          <div className="p-4 flex flex-col gap-1 border-b border-neutral-800">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Name</span>
            <span className="text-lg font-medium text-white">{data.name}</span>
          </div>
          
          <div className="p-4 flex flex-col gap-1 border-b border-neutral-800">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Occupation</span>
            <span className="text-lg font-medium text-white">{data.occupation}</span>
          </div>
          
          <div className="p-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Environment</span>
            <span className="text-lg font-medium text-white">{data.environment}</span>
          </div>
        </div>

        <div className="">
          <div className="h-full flex flex-col justify-start">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
              {data.introduction}
            </p>
            <div className="mt-8 pt-8 border-t border-neutral-800">
               <div className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-mono uppercase tracking-widest text-white/80">
                 Available for work
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;