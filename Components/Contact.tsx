import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import LinkCard from './LinkCard';
import { SocialLink } from '../types';

const Contact: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: "NOTE",
      username: "Takuro's Links",
      description: "お気に入りのリンク集",
      url: "https://note.com/tak_yoshiro0525/portal",
      imageUrl: "https://placehold.co/400x400/2ecc71/ffffff?text=note", 
    },
    {
      platform: "X (Twitter)",
      username: "@mirainovalue",
      description: "Web制作 / 学生エンジニア / AI",
      url: "https://x.com/mirainovalue",
      imageUrl: "https://placehold.co/400x400/ffffff/000000?text=X", 
    },
    {
      platform: "Facebook",
      username: "Takuro Yoshio",
      description: "Social Connection",
      url: "https://www.facebook.com/share/1A38J2WE7r/?mibextid=wwXIfr",
      imageUrl: "https://placehold.co/400x400/1877F2/ffffff?text=FB", 
    }
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdaJM5Kf4JyMUt1a-hdfzTHrqKSSivXskgkwpGXIQrvWVoNRw/viewform?usp=header";

  return (
    <section id="contact" className="max-w-6xl mx-auto mb-20 scroll-mt-24">
      <div className="flex items-baseline justify-between border-b border-white/20 pb-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight font-mono text-white">
          Connect
        </h2>
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Socials & Inquiries
        </span>
      </div>

      <div className="space-y-4 mb-16">
        {socialLinks.map((link, index) => (
          <LinkCard 
            key={index} 
            link={link} 
          />
        ))}
      </div>

      {/* Google Form Link Section */}
      <div className="border border-neutral-800 bg-neutral-900/50 p-8 md:p-16 flex flex-col items-center justify-center text-center">
        <div className="bg-neutral-800 p-4 rounded-full mb-6 text-white border border-neutral-700">
           <Mail size={32} />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-mono uppercase tracking-wide">
          Contact Form
        </h3>
        
        <p className="text-neutral-400 mb-10 max-w-lg leading-relaxed font-light">
          個人でのご依頼、ビジネスパートナー、業務提携、その他のお問い合わせは、以下のGoogleフォームよりお気軽にご連絡ください。
        </p>

        <a 
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all duration-300"
        >
          <span>Open Inquiry Form</span>
          <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Contact;