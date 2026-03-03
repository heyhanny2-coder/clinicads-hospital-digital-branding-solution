
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Services: React.FC = () => {
  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-brand-lavender/15 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-slate-200/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-brand-rose/15 rounded-full blur-[90px]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-28">
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-brand-navy mb-8">
          결과로 증명된 서비스
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-10">
          병원만의 신뢰를 쌓는<br />
          <span className="text-brand-navy/80">6가지 핵심 서비스</span>
        </h2>
        <p className="text-brand-navy/80 text-base font-normal leading-relaxed">
          검색, 플레이스, 리뷰, SNS, 홈페이지, 영상—환자가 병원을 발견하고 믿게 만드는 모든 경로를 하나의 브랜드로 연결합니다.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, i) => {
            const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[service.icon] || LucideIcons.PenTool;
            return (
              <FadeInSection key={service.id} delay={i * 80}>
              <div
                className="p-14 bg-white border border-brand-rose rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-lavender hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-slate-50 border border-brand-rose text-brand-navy mb-12 group-hover:bg-slate-100 group-hover:text-brand-navy transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-brand-navy/80 text-[15px] font-normal leading-relaxed mb-10">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-brand-navy/80 text-[15px] font-normal">
                      <span className="w-1.5 h-1.5 bg-brand-lavender rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              </FadeInSection>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/services"
            className="inline-block text-brand-navy font-semibold text-base tracking-[0.15em] uppercase border-b-2 border-brand-navy pb-2 hover:text-brand-navy/90 transition-colors"
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
