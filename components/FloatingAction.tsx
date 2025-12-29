
import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <a
        href={CONTACT_INFO.kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
      <button
        onClick={() => window.location.href = `tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
        className="w-14 h-14 bg-red-600 text-white flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
      >
        <Phone size={24} />
      </button>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-white/10 backdrop-blur-md text-white border border-white/10 flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingAction;
