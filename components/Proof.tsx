
import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO, FEATURED_PORTFOLIO_IDS } from '../constants';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Proof: React.FC = () => {
  const stats = [
    { value: '120+', label: '신뢰한 병원' },
    { value: '95%', label: '재계약율 (만족한 원장님)' },
    { value: '2.4B', label: '연간 광고 관리 규모' },
    { value: '8yr', label: '의료 마케팅 전문 경력' },
  ];

  return (
    <Section background="blue" padding="none" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-brand-lavender/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-rose/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center">
          {stats.map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/80 hover:shadow-lg transition-all duration-300">
              <p className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-2 font-serif italic">
                {stat.value}
              </p>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-navy/80">
                {stat.label}
              </p>
            </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-brand-navy mb-4">
          Trust & Results
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy leading-tight tracking-tight mb-6">
          이미 120곳의 병원이<br />
          <span className="text-brand-navy/80">변화를 경험했습니다.</span>
        </h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 text-brand-navy font-semibold text-base tracking-[0.15em] uppercase group hover:text-brand-navy/90"
          >
            전체 포트폴리오 보기
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURED_PORTFOLIO_IDS.map((id) => PORTFOLIO.find((p) => p.id === id)).filter(Boolean).map((item, i) => (
            <FadeInSection key={item.id} delay={i * 100}>
            <div
              className="group bg-white border border-brand-rose rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-brand-lavender hover:-translate-y-1 transition-all duration-300 min-h-[180px] flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-navy">
                  {item.category}
                </span>
                <span className="text-xs font-medium text-brand-navy/80">{item.location}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-brand-navy leading-tight tracking-tight mb-3 group-hover:text-brand-navy transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-navy/80 text-[13px] leading-relaxed font-normal mt-auto">
                {item.review}
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

export default Proof;
