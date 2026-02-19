
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingAction from './FloatingAction';
import AnnouncementPopup from './AnnouncementPopup';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#0a0a0a]">
      <AnnouncementPopup />
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
};

export default Layout;
