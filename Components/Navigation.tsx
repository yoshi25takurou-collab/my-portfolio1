import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Others', href: '#others' },
    { label: 'Connect', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, '#')}
          className="text-xl font-bold font-mono tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          MNV
        </a>

        <ul className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-xs md:text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;