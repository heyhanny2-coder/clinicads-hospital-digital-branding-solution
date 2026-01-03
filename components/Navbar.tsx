import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '서비스', path: '/services' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '견적계산기', path: 'https://clickadzcount.vercel.app/', isExternal: true },
    { name: '상담문의', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Clinic<span className="text-red-500">Ads</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105"
          >
            무료 진단 받기
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black z-40 animate-fade-in flex flex-col p-6 gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold tracking-tight text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold tracking-tight ${
                  location.pathname === link.path ? 'text-red-500' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="bg-red-600 text-white px-8 py-4 rounded-xl text-center text-lg font-bold mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            무료 진단 받기
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
