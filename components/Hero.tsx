import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Shield, TrendingUp, Users } from 'lucide-react';
import Section from './Section';

const Hero: React.FC = () => {
  const badges = [
    { icon: Shield, text: '의료법 100% 준수' },
    { text: '무료 진단' },
    { icon: TrendingUp, text: '95% 재계약율' },
    { icon: Users, text: '120+ 병원' },
  ];

  return (
    <Section
      background="white"
      padding="none"
      containerSize="default"
      centered
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 md:pt-40 md:pb-48"
    >
      {/* 배경: 컬러풀 오브 + 메시 그라데이션 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-br from-blue-400/20 via-cyan-300/15 to-teal-400/20 rounded-full blur-[200px] animate-gradient-flow" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-amber-400/25 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-violet-400/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-emerald-400/15 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-rose-300/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto">
        {/* 플로팅 배지 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm text-slate-700 text-sm font-medium animate-scale-in hover:border-blue-200 hover:shadow-md transition-all"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
            >
              {badge.icon && <badge.icon size={14} className="text-blue-500" />}
              {badge.text}
            </span>
          ))}
        </div>

        <p className="text-xs md:text-sm font-medium tracking-[0.35em] uppercase text-blue-600 mb-8 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          8년간 120+ 병원이 선택한 의료 전문 마케팅
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-12 animate-slide-up" style={{ animationDelay: '250ms', animationFillMode: 'both' }}>
          광고비가 아까우신 원장님,<br />
          <span className="text-slate-600">이제 신뢰가 쌓이는 구조로 바꾸세요.</span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 font-normal max-w-[600px] mx-auto leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '350ms', animationFillMode: 'both' }}>
          검색에서 신뢰를 거쳐 예약까지—환자가 찾고, 믿고, 예약하는<br className="hidden md:block" />
          병·의원 전용 디지털 브랜딩 솔루션
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '450ms', animationFillMode: 'both' }}>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-14 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
          >
            무료 진단 받기
          </Link>
          <a
            href={CONTACT_INFO.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-14 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-blue-200"
          >
            카카오톡 문의
          </a>
        </div>

        {/* 신뢰 지표 줄 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-500 text-sm animate-slide-up" style={{ animationDelay: '550ms', animationFillMode: 'both' }}>
          <span>✓ 무료 진단</span>
          <span>✓ 의료법 100% 준수</span>
          <span>✓ 95% 재계약율</span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-slate-600">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </Section>
  );
};

export default Hero;
