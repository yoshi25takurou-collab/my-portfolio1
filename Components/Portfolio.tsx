import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <section id="works" className="max-w-6xl mx-auto scroll-mt-24">
      <div className="flex items-baseline justify-between border-b border-white/20 pb-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight font-mono text-white">
          Selected Works
        </h2>
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {items.length} Projects
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col gap-4"
          >
            {/* Image Area */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border border-neutral-800">
              {item.isComingSoon ? (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-600">
                    <span className="font-mono text-xs uppercase tracking-[0.2em]">Coming Soon</span>
                 </div>
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
                </a>
              )}
            </div>

            {/* Content Area */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                  {item.isComingSoon ? "Untitled Project" : item.title}
                </h3>
                {!item.isComingSoon && item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-neutral-400 transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
              
              <div className="flex gap-4 items-center">
                 <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                   {item.isComingSoon ? 'In Development' : 'Web Development'}
                 </span>
                 <span className="h-px flex-1 bg-neutral-800"></span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;