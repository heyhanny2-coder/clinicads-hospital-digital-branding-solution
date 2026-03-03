
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Sparkles, CheckCircle } from 'lucide-react';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Solution: React.FC = () => {
  const points = [
    { id: '01', title: '맞춤형 1:1 컨설팅', text: '당신의 병원만을 위한 현황 분석으로, 가장 효과적인 전환 경로를 설계합니다.', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop' },
    { id: '02', title: '강점 발견 & 강조', text: '병원의 숨겨진 강점을 찾아, 환자가 선택해야 할 이유를 분명히 합니다.', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300&auto=format&fit=crop' },
    { id: '03', title: '효율적 투자 설계', text: '광고비를 줄이면서 신뢰는 쌓이도록, 맞춤형 전략을 제안합니다.', imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&auto=format&fit=crop' },
    { id: '04', title: '24/7 리스크 관리', text: '악성 리뷰·부정적 노출을 예방하는 철저한 모니터링으로 병원 평판을 지킵니다.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop' },
    { id: '05', title: '투명한 진행 공유', text: '매체별 일정과 성과를 실시간 공유해, 원장님이 언제든 확인하실 수 있습니다.', imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=300&auto=format&fit=crop' },
    { id: '06', title: '끊임없는 동행', text: '한 번 시작하면, 결과가 나올 때까지 끝까지 함께합니다.', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop' },
  ];

  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-brand-lavender/20 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-slate-200/20 rounded-full blur-[110px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-rose/15 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute top-[15%] right-[12%] opacity-20 animate-bounce-soft">
          <Lightbulb size={28} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[35%] left-[8%] opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={22} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[35%] right-[10%] opacity-20 animate-wiggle">
          <CheckCircle size={24} className="text-brand-lavender" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] opacity-15 animate-float-reverse" style={{ animationDelay: '0.5s' }}>
          <Lightbulb size={18} className="text-brand-rose" />
        </div>
        <div className="absolute top-[50%] right-[5%] w-4 h-4 rounded-full border-2 border-brand-lavender/25 animate-spin-slow" />
        <div className="absolute bottom-[45%] left-[6%] w-2 h-2 rounded-full bg-brand-lavender/40 animate-bounce-soft" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.02)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-28">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/15 border border-brand-rose/50 text-brand-navy text-xs font-medium mb-8">
          <Lightbulb size={12} className="text-brand-lavender" />
          Transformation
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-10">
          <span className="text-highlight">광고비 지출</span>에서<br />
          <span className="text-brand-navy/80"><span className="text-highlight-strong">신뢰 축적 구조</span>로 전환하세요.</span>
        </h2>
        <p className="text-brand-navy/80 text-base font-normal leading-relaxed mb-14">
          ClinicAds는 단순 광고 대행이 아닙니다. 환자가 검색할 때 발견되고, 믿고, 예약하는—<span className="text-highlight-strong">병원만의 신뢰 설계</span>를 함께 만듭니다.
        </p>
        <Link
          to="/services"
          className="link-underline-expand inline-block text-brand-navy font-semibold text-base tracking-[0.15em] uppercase border-b-2 border-brand-navy pb-2 hover:text-brand-navy/90 transition-colors"
        >
          서비스 자세히 보기
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 80}>
            <div
              className="card-shimmer overflow-hidden bg-slate-50 border border-brand-rose rounded-2xl shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-lavender hover:-translate-y-2 transition-all duration-300 group/card"
            >
              <div className="h-20 overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>
              <div className="p-14 pt-8">
              <span className="text-2xl font-black text-brand-navy/80 block mb-10 font-serif italic group-hover/card:text-brand-lavender transition-colors duration-300">
                {p.id}
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-5 tracking-tight">
                {p.title}
              </h3>
              <p className="text-brand-navy/80 text-[15px] leading-relaxed font-normal">
                {p.text}
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

export default Solution;
