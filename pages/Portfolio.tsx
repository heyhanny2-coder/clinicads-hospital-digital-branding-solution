
import React from 'react';
import { PORTFOLIO } from '../constants';
import { Quote } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h1 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-6 uppercase">Case Studies</h1>
          <h2 className="text-5xl md:text-7xl font-black mb-10">결과로 증명합니다.</h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            수많은 병원이 ClinicAds와 함께 브랜드의 가치를 높이고 <br />
            지속 가능한 성장 구조를 만들었습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-red-500/30 transition-all duration-500 flex flex-col min-h-[350px] justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600/20 group-hover:bg-red-600 transition-colors"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-red-500 text-[10px] font-black tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-[0.1em] uppercase">
                    {item.location}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white group-hover:text-red-500 transition-colors mb-8 leading-tight">
                  {item.title}
                </h3>
                
                {item.review && (
                  <div className="relative pt-6 border-t border-white/5">
                    <Quote className="absolute -top-3 left-0 text-red-500/20 w-8 h-8" />
                    <p className="text-gray-400 text-lg leading-relaxed italic relative z-10 font-light">
                      "{item.review}"
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-600 uppercase group-hover:text-red-500 transition-colors">
                <span>View Case Study</span>
                <div className="w-8 h-[1px] bg-gray-800 group-hover:bg-red-500 transition-all"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <p className="text-gray-500 italic font-serif text-2xl mb-8">"마케팅은 광고비 소모가 아니라, 신뢰의 축적입니다."</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Partner Logos / Names */}
             {PORTFOLIO.map(p => (
               <span key={p.id} className="text-xl font-black italic whitespace-nowrap">{p.title.toUpperCase()}</span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
