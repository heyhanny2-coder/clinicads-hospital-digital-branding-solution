
import React from 'react';
import { PAIN_POINTS } from '../../constants';

const PainPoints: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-4 uppercase">Problem Analysis</h2>
            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              왜 마케팅을 해도<br />
              <span className="text-gray-500">병원은 남지 않을까요?</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm font-light leading-relaxed">
            원장님이 겪고 계신 불안과 불신은 당연한 것입니다. <br />
            진짜 성장은 광고비 지출이 아닌, 병원 고유의 구조 설계에서 시작됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PAIN_POINTS.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-500"
            >
              <span className="text-4xl font-serif italic text-red-500/20 group-hover:text-red-500/40 transition-colors mb-8 block">
                0{index + 1}
              </span>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
