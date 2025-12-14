import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Others from './components/Others';
import { PortfolioItem, ProfileData } from './types';

// Mock Data
const profileData: ProfileData = {
  name: "Takuro Yoshio",
  occupation: "Student Engineer",
  environment: "Using Cursor / Modern Stack",
  introduction: "現在大学二年生で、個人でHP・WEB系のフロント制作を主に活動しています。お客様のご要望、ご予算に応じて柔軟に対応いたします。"
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Mini India Restaurant",
    description: "Mini India Restaurantの公式ウェブサイト。代々木、藤沢、西新宿で本場のシェフが作る本格インド料理を提供。メニュー閲覧、オンライン予約、お客様の声などの機能を搭載。",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop",
    link: "https://project-915b826d.pages.dev/",
    isComingSoon: false
  },
  {
    id: "2",
    title: "Coming Soon",
    description: "準備中の新規プロジェクト。",
    imageUrl: "",
    isComingSoon: true
  },
  {
    id: "3",
    title: "Coming Soon",
    description: "準備中の新規プロジェクト。",
    imageUrl: "",
    isComingSoon: true
  },
  {
    id: "4",
    title: "Coming Soon",
    description: "準備中の新規プロジェクト。",
    imageUrl: "",
    isComingSoon: true
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-neutral-200 pb-20">
      <Navigation />
      <Hero />
      
      <main className="container mx-auto px-4 md:px-8 space-y-32">
        <Profile data={profileData} />
        <Portfolio items={portfolioItems} />
        <Others />
        <Contact />
      </main>

      <footer className="mt-32 py-12 text-center text-neutral-500 text-xs font-mono uppercase tracking-widest border-t border-neutral-800">
        <p>&copy; {new Date().getFullYear()} Takuro Yoshio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;