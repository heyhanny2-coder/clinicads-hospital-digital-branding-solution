
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden bg-black">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 mt-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-red-500"></span>
            <span className="text-red-500 text-sm font-bold tracking-[0.3em] uppercase">Specialized Medical Branding</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
            병원 마케팅,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              이제 광고 말고 구조로 합니다.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
            검색에서 신뢰를 거쳐 예약까지 연결되는<br />
            병·의원 전용 디지털 브랜딩 솔루션, <span className="text-white font-medium">ClinicAds</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all group"
            >
              무료 진단 요청하기
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT_INFO.kakao}
              target="_blank"
              className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-4 text-[10px] tracking-[0.4em] text-white/30 uppercase vertical-text font-bold animate-pulse">
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
