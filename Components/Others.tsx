import React from 'react';
import { ArrowUpRight, Building2 } from 'lucide-react';

const Others: React.FC = () => {
  return (
    <section id="others" className="max-w-6xl mx-auto scroll-mt-24">
      <div className="flex items-baseline justify-between border-b border-white/20 pb-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight font-mono text-white">
          Others
        </h2>
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Partners & Affiliations
        </span>
      </div>

      <div className="border border-neutral-800 bg-neutral-900/50 p-6 md:p-10 hover:border-neutral-700 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
           <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-neutral-800 rounded text-white">
                    <Building2 size={20} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">WEBB</h3>
                    <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider block">Business Partner</span>
                 </div>
              </div>
              <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed font-light">
                現在、業務委託契約を締結しているパートナー企業です。Web制作やクリエイティブ事業において連携し、価値創造に取り組んでいます。
              </p>
           </div>
           
           <a 
             href="https://webb-official.notion.site/"
             target="_blank" 
             rel="noopener noreferrer"
             className="shrink-0 group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all duration-300"
           >
             <span>Visit Website</span>
             <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Others;