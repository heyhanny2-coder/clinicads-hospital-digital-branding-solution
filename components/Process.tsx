
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ListChecks, ArrowRight, Layers } from 'lucide-react';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Process: React.FC = () => {
  return (
    <Section background="slate" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-200/25 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-lavender/18 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(205,159,204,0.08)_100%)]" />
        <div className="absolute top-[20%] left-[10%] opacity-20 animate-bounce-soft">
          <ListChecks size={28} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[45%] right-[8%] opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <ArrowRight size={24} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[35%] left-[12%] opacity-20 animate-wiggle">
          <Layers size={22} className="text-brand-rose" />
        </div>
        <div className="absolute bottom-[25%] right-[15%] opacity-15 animate-float-reverse" style={{ animationDelay: '2s' }}>
          <ListChecks size={18} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[60%] right-[5%] w-3 h-3 rounded-full bg-brand-lavender/30 animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[50%] left-[5%] w-5 h-5 rounded-full border-2 border-brand-rose/20 animate-spin-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/15 border border-brand-rose/50 text-brand-navy text-xs font-medium mb-6">
          <ListChecks size={12} className="text-brand-lavender" />
          투명한 프로세스
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-6">
          <span className="text-highlight">감이 아닌</span>,<br />
          <span className="text-brand-navy/80"><span className="text-highlight-strong">데이터로 결과</span>를 만듭니다.</span>
        </h2>
        <p className="text-brand-navy/80 text-base font-normal leading-relaxed">
          숨기는 것 없이, 매 단계를 함께합니다. <span className="text-emphasis">진단부터 운영까지</span>—무엇이 어떻게 되는지 명확히 설명해 드립니다.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-8 top-16 bottom-16 w-0.5 border-l-2 border-dashed border-brand-lavender/25 hidden md:block" />
        <div className="space-y-14 relative">
          {PROCESS_STEPS.map((step, index) => (
            <FadeInSection key={index} delay={index * 80}>
            <div
              className="flex gap-12 md:gap-20 items-start group/step"
            >
              <div className="step-pulse flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-brand-rose flex items-center justify-center text-xl font-extrabold text-brand-navy shadow-sm group-hover/step:border-brand-lavender group-hover/step:bg-brand-light group-hover/step:scale-110 transition-all duration-300">
                {step.step}
              </div>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-5 tracking-tight">
                  <span className="text-highlight">{step.title}</span>
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
