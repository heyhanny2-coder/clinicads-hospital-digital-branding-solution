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

  const isDarkPage = location.pathname === '/portfolio';
  const isTransparentNav = !isScrolled && !isMobileMenuOpen;
  const logoLight = isDarkPage && isTransparentNav;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : isDarkPage ? 'bg-black/30 backdrop-blur-sm py-6' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <span className={`text-xl font-black tracking-tighter uppercase italic transition-colors ${logoLight ? 'text-white' : 'text-slate-900'}`}>
            Clinic<span className={logoLight ? 'text-blue-300' : 'text-blue-600'}>Ads</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[12px] font-bold tracking-[0.1em] transition-colors ${logoLight ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[12px] font-bold tracking-[0.1em] transition-colors ${
                  logoLight
                    ? (location.pathname === link.path ? 'text-blue-300' : 'text-slate-300 hover:text-white')
                    : (location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600')
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all ${
              logoLight ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
            }`}
          >
            무료 진단 받기
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 ${logoLight ? 'text-white' : 'text-slate-900'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-white z-40 animate-fade-in flex flex-col p-6 gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold tracking-tight text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-bold tracking-tight ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-center text-lg font-bold mt-4"
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
