
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Process: React.FC = () => {
  return (
    <Section background="slate" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-200/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-lavender/18 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(205,159,204,0.08)_100%)]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-28">
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-brand-navy mb-8">
          투명한 프로세스
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-10">
          감이 아닌,<br />
          <span className="text-brand-navy/80">데이터로 결과를 만듭니다.</span>
        </h2>
        <p className="text-brand-navy/80 text-base font-normal leading-relaxed">
          숨기는 것 없이, 매 단계를 함께합니다. 진단부터 운영까지—무엇이 어떻게 되는지 명확히 설명해 드립니다.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-20">
          {PROCESS_STEPS.map((step, index) => (
            <FadeInSection key={index} delay={index * 80}>
            <div
              className="flex gap-12 md:gap-20 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-brand-rose flex items-center justify-center text-xl font-extrabold text-brand-navy shadow-sm group-hover:border-brand-lavender group-hover:bg-brand-light transition-colors">
                {step.step}
              </div>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-brand-navy/80 text-[15px] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
};

export default Process;
