
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-24 max-w-3xl">
          <h1 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-6 uppercase">Our Expertise</h1>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
            의료업종 특화<br />
            디지털 브랜딩 라인업
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            단순히 서비스를 나열하지 않습니다. <br />
            각 채널이 하나의 브랜드를 향해 작동하도록 유기적으로 운영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Layers;
            return (
              <div key={service.id} className="p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-red-500/40 transition-all group">
                <div className="w-16 h-16 bg-red-600/10 text-red-500 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 font-light text-lg">{service.description}</p>
                <ul className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-500">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-32 p-12 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <h3 className="text-3xl font-black mb-2">어떤 서비스를 선택해야 할지 고민되시나요?</h3>
            <p className="text-white/80">병원의 현재 상황을 진단하고 최적의 패키지를 제안해 드립니다.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://clickadzcount.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:bg-gray-900 transition-all text-center"
            >
              맞춤 견적 받아보기
            </a>
            <button 
              onClick={() => window.location.href = '#/contact'}
              className="bg-white text-red-600 px-10 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all"
            >
              진단 문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
