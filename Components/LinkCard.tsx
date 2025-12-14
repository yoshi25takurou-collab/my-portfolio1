import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SocialLink } from '../types';

interface LinkCardProps {
  link: SocialLink;
  bgColor?: string; 
}

const LinkCard: React.FC<LinkCardProps> = ({ link, bgColor }) => {
  return (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
    >
      <div className="flex h-32">
        {/* Content Side */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                {link.platform}
                </div>
                <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide truncate pr-4">
            {link.username || link.platform}
            </h3>
          </div>
          <div className="text-xs text-neutral-500 truncate font-mono">
            {link.url.replace(/^https?:\/\//, '')}
          </div>
        </div>

        {/* Image Side - Optional: Make it black and white or darker */}
        <div className="w-32 relative overflow-hidden bg-neutral-800">
          {link.imageUrl ? (
            <>
                <img src={link.imageUrl} alt={link.platform} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/20" />
            </>
          ) : (
             <div className="w-full h-full flex items-center justify-center text-neutral-600">
               {link.icon}
             </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default LinkCard;