
import React from 'react';
import { PAIN_POINTS } from '../constants';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Problem: React.FC = () => {
  return (
    <Section background="slate" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-300/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
      </div>
      <div className="relative z-10">
      <FadeInSection>
      <div className="max-w-3xl mx-auto text-center mb-28">
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-blue-600 mb-8">
          원장님이라면 한 번쯤
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-10">
          왜 광고를 해도<br />
          <span className="text-slate-600">병원에는 환자가 안 남을까요?</span>
        </h2>
        <p className="text-slate-600 text-base font-normal leading-relaxed">
          당신의 고민은 당연합니다. 광고만으로는 병원이 남지 않습니다.<br />
          진짜 변화는 <strong className="text-slate-700 font-semibold">병원이 환자에게 어떻게 보이는가</strong>를 바꾸는 일부터 시작됩니다.
        </p>
      </div>
      </FadeInSection>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PAIN_POINTS.map((item, index) => (
            <FadeInSection key={index} delay={index * 80}>
            <div
              className="p-14 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl font-black text-blue-600/80 block mb-10 font-serif italic">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
};

export default Problem;
