
import React from 'react';
import Hero from '../components/home/Hero';
import PainPoints from '../components/home/PainPoints';
import Solution from '../components/home/Solution';
import Process from '../components/home/Process';
import { Link } from 'react-router-dom';
import { PORTFOLIO, CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <Hero />
      <PainPoints />
      <Solution />
      <Process />
      
      {/* Numbers Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-red-500 text-5xl md:text-7xl font-black mb-2 italic">120+</p>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Partner Hospitals</p>
            </div>
            <div>
              <p className="text-white text-5xl md:text-7xl font-black mb-2 italic">95%</p>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Renewal Rate</p>
            </div>
            <div>
              <p className="text-red-500 text-5xl md:text-7xl font-black mb-2 italic">2.4B</p>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Ads Managed (Annual)</p>
            </div>
            <div>
              <p className="text-white text-5xl md:text-7xl font-black mb-2 italic">8yr</p>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Expertise Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-4 uppercase">Success Cases</h2>
              <h3 className="text-4xl md:text-6xl font-black leading-tight">
                우리의 결과가<br />
                <span className="text-gray-500">실력을 증명합니다.</span>
              </h3>
            </div>
            <Link 
              to="/portfolio" 
              className="group flex items-center gap-2 text-white hover:text-red-500 transition-colors text-lg font-bold"
            >
              전체 포트폴리오 보기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO.slice(0, 3).map((item) => (
              <div key={item.id} className="group bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:border-red-500/30 transition-all duration-500">
                <p className="text-red-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase">{item.category} • {item.location}</p>
                <h4 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors mb-6">{item.title}</h4>
                <div className="w-12 h-1 bg-white/10 group-hover:bg-red-500 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 relative overflow-hidden bg-black text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.4em] mb-8 uppercase">Start Your Journey</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-12 leading-tight">
            광고를 할지 말지 고민하기 전에,<br />
            <span className="text-gray-500">병원이 어떻게 보이는지부터 확인하세요.</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://clickadzcount.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105"
            >
              맞춤 견적 받아보기
            </a>
            <Link 
              to="/contact"
              className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-red-500 hover:text-white transition-all transform hover:scale-105"
            >
              무료 마케팅 진단 신청
            </Link>
            <a 
              href={CONTACT_INFO.kakao}
              target="_blank"
              className="bg-gray-900 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              카카오톡 빠른 상담
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
