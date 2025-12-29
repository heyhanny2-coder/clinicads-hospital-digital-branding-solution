
import React from 'react';
import { PROCESS_STEPS } from '../../constants';

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-4 uppercase">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">성공을 만드는 5단계 프로세스</h3>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            감에 의존하지 않습니다. 철저한 진단부터 시스템화된 운영까지<br />
            설명 가능한 마케팅을 약속합니다.
          </p>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Vertical line for desktop */}
          <div className="absolute left-[40px] top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block"></div>
          
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start relative group">
              <div className="flex-shrink-0 w-20 h-20 bg-black border border-white/10 rounded-full flex items-center justify-center text-2xl font-black italic text-red-500 relative z-10 group-hover:border-red-500/50 transition-colors">
                {step.step}
              </div>
              <div className="pt-4 max-w-xl">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
