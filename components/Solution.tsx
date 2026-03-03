
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Sparkles, CheckCircle, MessageCircle, Search, PieChart, Shield, Share2, Handshake, LucideIcon } from 'lucide-react';

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  MessageCircle, Search, PieChart, Shield, Share2, Handshake
};
import Section from './Section';
import FadeInSection from './FadeInSection';

const Solution: React.FC = () => {
  const points = [
    { id: '01', title: '맞춤형 1:1 컨설팅', text: '당신의 병원만을 위한 현황 분석으로, 가장 효과적인 전환 경로를 설계합니다.', icon: 'MessageCircle', gradient: 'from-brand-light via-brand-rose/25 to-brand-lavender/20', iconColor: 'text-sky-600', badgeAccent: 'border-sky-300/80' },
    { id: '02', title: '강점 발견 & 강조', text: '병원의 숨겨진 강점을 찾아, 환자가 선택해야 할 이유를 분명히 합니다.', icon: 'Search', gradient: 'from-brand-light via-brand-lavender/25 to-brand-pink/20', iconColor: 'text-violet-600', badgeAccent: 'border-violet-300/80' },
    { id: '03', title: '효율적 투자 설계', text: '광고비를 줄이면서 신뢰는 쌓이도록, 맞춤형 전략을 제안합니다.', icon: 'PieChart', gradient: 'from-slate-50 via-brand-navy/10 to-brand-rose/15', iconColor: 'text-emerald-600', badgeAccent: 'border-emerald-300/80' },
    { id: '04', title: '24/7 리스크 관리', text: '악성 리뷰·부정적 노출을 예방하는 철저한 모니터링으로 병원 평판을 지킵니다.', icon: 'Shield', gradient: 'from-brand-light via-brand-pink/20 to-brand-lavender/15', iconColor: 'text-indigo-600', badgeAccent: 'border-indigo-300/80' },
    { id: '05', title: '투명한 진행 공유', text: '매체별 일정과 성과를 실시간 공유해, 원장님이 언제든 확인하실 수 있습니다.', icon: 'Share2', gradient: 'from-slate-50 via-brand-lavender/20 to-brand-rose/15', iconColor: 'text-fuchsia-600', badgeAccent: 'border-fuchsia-300/80' },
    { id: '06', title: '끊임없는 동행', text: '한 번 시작하면, 결과가 나올 때까지 끝까지 함께합니다.', icon: 'Handshake', gradient: 'from-brand-light via-brand-rose/20 to-brand-lavender/25', iconColor: 'text-amber-600', badgeAccent: 'border-amber-300/80' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 80}>
            <div
              className="card-shimmer overflow-hidden bg-slate-50 border border-brand-rose rounded-2xl shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-lavender hover:-translate-y-2 transition-all duration-300 group/card"
            >
              <div className={`card-icon-header min-h-[140px] flex items-center justify-center bg-gradient-to-br ${p.gradient} transition-all duration-500 group-hover/card:opacity-95`}>
                <div className="relative flex items-center justify-center">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-lg bg-opacity-20 opacity-30 ${p.iconColor.replace('text-', 'bg-')}`} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 ${p.badgeAccent} transition-colors duration-300`} />
                  <div className={`card-icon-badge card-icon-float relative z-10 w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm border-2 flex items-center justify-center group-hover/card:bg-white group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-300 ${p.badgeAccent}`}>
                    {(() => {
                      const Icon = SOLUTION_ICONS[p.icon];
                      return Icon ? <Icon size={28} className={`${p.iconColor} group-hover/card:scale-110 transition-all duration-300`} strokeWidth={1.8} /> : null;
                    })()}
                  </div>
                </div>
              </div>
              <div className="p-8 pt-6">
              <span className="text-2xl font-black text-brand-navy/80 block mb-6 font-serif italic group-hover/card:text-brand-lavender transition-colors duration-300">
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
