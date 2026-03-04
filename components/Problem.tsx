
import React from 'react';
import { PAIN_POINTS } from '../constants';
import { HelpCircle, AlertTriangle, Sparkles, Scale, LayoutGrid, BarChart3, ZapOff, LucideIcon } from 'lucide-react';

const PAIN_ICONS: Record<string, LucideIcon> = { Scale, LayoutGrid, BarChart3, ZapOff };
import Section from './Section';
import FadeInSection from './FadeInSection';

const Problem: React.FC = () => {
  return (
    <Section background="slate" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-lavender/25 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-slate-200/25 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(205,159,204,0.12)_0%,transparent_50%)]" />
        <div className="absolute top-[20%] left-[8%] opacity-15 animate-bounce-soft">
          <HelpCircle size={32} className="text-brand-navy" />
        </div>
        <div className="absolute top-[40%] right-[10%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <AlertTriangle size={24} className="text-brand-lavender" />
        </div>
        <div className="absolute bottom-[30%] left-[12%] opacity-15 animate-wiggle">
          <Sparkles size={20} className="text-brand-rose" />
        </div>
        <div className="absolute bottom-[20%] right-[15%] opacity-20 animate-float-reverse" style={{ animationDelay: '2s' }}>
          <HelpCircle size={18} className="text-brand-navy" />
        </div>
        <div className="absolute top-[60%] right-[5%] w-3 h-3 rounded-full bg-brand-lavender/30 animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[50%] left-[5%] w-2 h-2 rounded-full bg-brand-rose/40 animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      <div className="relative z-10">
      <FadeInSection>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/15 border border-brand-rose/50 text-brand-navy text-xs font-medium mb-6 animate-float-up">
          <HelpCircle size={12} className="text-brand-lavender" />
          원장님이라면 한 번쯤
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-6">
          왜 <span className="text-highlight">광고를 해도</span><br />
          <span className="text-brand-navy/80">병원에는 환자가 안 남을까요?</span>
        </h2>
        <p className="text-brand-navy/80 text-base font-normal leading-relaxed">
          당신의 고민은 당연합니다. 광고만으로는 병원이 남지 않습니다.<br />
          진짜 변화는 <span className="text-highlight-strong">병원이 환자에게 어떻게 보이는가</span>를 바꾸는 일부터 시작됩니다.
        </p>
      </div>
      </FadeInSection>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {PAIN_POINTS.map((item, index) => (
            <FadeInSection key={index} delay={index * 80}>
            <div
              className="card-shimmer overflow-hidden bg-white border border-brand-rose rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-lavender hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group/card"
            >
              <div className={`card-icon-header min-h-[110px] flex items-center justify-center bg-gradient-to-br ${item.gradient} transition-all duration-500 group-hover/card:opacity-95`}>
                <div className="relative flex items-center justify-center">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-lg ${item.iconColor.replace('text-', 'bg-')} opacity-25`} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 ${item.badgeAccent.split(' ')[0]} transition-colors duration-300`} />
                  <div className={`card-icon-badge card-icon-float relative z-10 w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm border-2 flex items-center justify-center group-hover/card:bg-white group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-300 ${item.badgeAccent}`}>
                    {(() => {
                      const Icon = PAIN_ICONS[item.icon];
                      return Icon ? <Icon size={34} className={`${item.iconColor} group-hover/card:scale-110 transition-all duration-300`} strokeWidth={1.8} /> : null;
                    })()}
                  </div>
                </div>
              </div>
              <div className="px-5 py-6">
                <span className="text-xl font-black text-brand-navy/80 block mb-3 font-serif italic group-hover/card:text-brand-lavender transition-colors duration-300">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-navy/80 text-[14px] leading-relaxed font-normal">
                  {item.description}
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

export default Problem;
