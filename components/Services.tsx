import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Globe, Video, Sparkles, PenTool } from 'lucide-react';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Services: React.FC = () => {
  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-brand-lavender/15 rounded-full blur-[110px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-slate-200/20 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-brand-rose/15 rounded-full blur-[90px] animate-blob-pulse" />
        <div className="absolute top-[18%] left-[12%] opacity-15 animate-bounce-soft">
          <PenTool size={26} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[35%] right-[10%] opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Globe size={22} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[40%] left-[8%] opacity-15 animate-wiggle">
          <Video size={24} className="text-brand-rose" />
        </div>
        <div className="absolute bottom-[25%] right-[15%] opacity-20 animate-float-reverse" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={20} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[55%] left-[5%] w-2 h-2 rounded-full bg-brand-lavender/40 animate-bounce-soft" />
        <div className="absolute bottom-[30%] right-[6%] w-6 h-6 rounded-full border-2 border-brand-rose/20 animate-spin-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/15 border border-brand-rose/50 text-brand-navy text-xs font-medium mb-6">
            <Sparkles size={12} className="text-brand-lavender" />
            결과로 증명된 서비스
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-6">
            병원만의 신뢰를 쌓는<br />
            <span className="text-brand-navy/80"><span className="text-highlight-strong">6가지 핵심 서비스</span></span>
          </h2>
          <p className="text-brand-navy/80 text-base font-normal leading-relaxed">
            <span className="text-emphasis">검색, 플레이스, 리뷰, SNS, 홈페이지, 영상</span>—환자가 병원을 발견하고 믿게 만드는 모든 경로를 하나의 브랜드로 연결합니다.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[service.icon] || LucideIcons.PenTool;
              return (
                <FadeInSection key={service.id} delay={i * 80}>
                  <div className="card-shimmer h-full flex flex-col p-8 md:p-10 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-lavender/50 hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-50 text-brand-navy mb-6 group-hover:bg-brand-lavender/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-brand-navy/80 text-sm font-normal leading-relaxed mb-6 flex-shrink-0">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 flex-grow">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-brand-navy/80 text-sm font-normal">
                          <span className="w-1 h-1 mt-1.5 bg-brand-lavender rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="link-underline-expand inline-block text-brand-navy font-semibold text-sm tracking-[0.15em] uppercase border-b-2 border-brand-navy pb-2 hover:text-brand-navy/90 transition-colors"
            >
              전체 서비스 보기
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
