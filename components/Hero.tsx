import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Shield, TrendingUp, Users, Search, Heart, Sparkles } from 'lucide-react';
import Section from './Section';

const ROTATING_PHRASES = ['신뢰가 쌓이는 병원', '검색에서 발견되는 병원', '환자가 찾는 병원'];

const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const badges = [
    { icon: Shield, text: '의료법 100% 준수' },
    { text: '무료 진단' },
    { icon: TrendingUp, text: '95% 재계약율' },
    { icon: Users, text: '120+ 병원' },
  ];

  return (
    <Section
      background="transparent"
      padding="none"
      containerSize="default"
      centered
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 md:pt-40 md:pb-48"
    >
      {/* 배경: 컬러풀 오브 + 메시 그라데이션 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-br from-slate-100/80 via-slate-50/60 to-slate-100/70 rounded-full blur-[200px] animate-gradient-flow" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-slate-100/50 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-slate-200/30 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-slate-100/40 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-slate-200/20 rounded-full blur-[80px] animate-float" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* 플로팅 장식 아이콘 */}
        <div className="absolute top-[15%] left-[12%] opacity-20 animate-bounce-soft">
          <Search size={28} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[25%] right-[15%] opacity-25 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={24} className="text-brand-lavender fill-brand-lavender/30" />
        </div>
        <div className="absolute bottom-[35%] left-[18%] opacity-20 animate-float-reverse" style={{ animationDelay: '2s' }}>
          <Sparkles size={22} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-20 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
          <TrendingUp size={26} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[40%] right-[8%] opacity-15 animate-wiggle">
          <Sparkles size={18} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[45%] left-[8%] opacity-15 animate-spin-slow">
          <div className="w-3 h-3 rounded-full bg-brand-lavender/40" />
        </div>
        <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-brand-lavender/30 animate-bounce-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[70%] right-[7%] w-8 h-8 rounded-full border-2 border-brand-lavender/20 animate-spin-slow" />
        <div className="absolute top-[20%] left-[25%] opacity-10">
          <Heart size={16} className="text-brand-lavender animate-float" />
        </div>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto">
        {/* 플로팅 배지 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-rose/80 shadow-sm text-brand-navy text-sm font-medium animate-scale-in hover:border-brand-lavender hover:shadow-md hover:scale-110 hover:-rotate-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
            >
              {badge.icon && <badge.icon size={14} className="text-brand-navy" />}
              {badge.text}
            </span>
          ))}
        </div>

        <p className="text-xs md:text-sm font-medium tracking-[0.35em] uppercase text-brand-navy mb-4 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          클리닉애즈 ClinicAds
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '220ms', animationFillMode: 'both' }}>
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-brand-navy/80">
            8년간
          </p>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-lavender/20 text-brand-navy font-bold text-sm animate-float-up border border-brand-lavender/30">
            <Users size={16} />
            <span className="text-emphasis-lavender">120+ 병원</span>
          </span>
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-brand-navy/80">
            이 선택한 의료 전문 마케팅
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-[1.15] tracking-tight mb-12 animate-slide-up relative" style={{ animationDelay: '250ms', animationFillMode: 'both' }}>
          광고비가 아까우신 원장님,<br />
          <span className="text-brand-navy/80">이제 <span className="text-highlight-strong">신뢰가 쌓이는 구조</span>로 바꾸세요.</span>
          <span className="absolute -top-1 -right-1 md:right-2 opacity-30 animate-bounce-soft hidden sm:block">
            <Sparkles size={28} className="text-brand-lavender" />
          </span>
        </h1>

        <div className="mb-12 animate-slide-up" style={{ animationDelay: '350ms', animationFillMode: 'both' }}>
          <p className="text-base md:text-lg text-brand-navy/80 font-normal max-w-[600px] mx-auto leading-relaxed">
            <span className="text-emphasis">검색 → 신뢰 → 예약</span>—환자가 찾고, 믿고, 예약하는<br className="hidden md:block" />
            <span className="text-highlight">병·의원 전용</span> 디지털 브랜딩 솔루션
          </p>
          <p key={phraseIndex} className="mt-4 text-sm font-medium text-brand-lavender min-h-[24px] animate-fade-in">
            {ROTATING_PHRASES[phraseIndex]}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '450ms', animationFillMode: 'both' }}>
          <Link
            to="/contact"
            className="group/btn w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-white px-14 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-brand-lavender/30 hover:shadow-brand-lavender/50 hover:-translate-y-0.5 hover:scale-105 active:scale-100 relative overflow-hidden animate-glow-pulse"
          >
            <span className="relative z-10">무료 진단 받기</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          </Link>
          <a
            href={CONTACT_INFO.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-rose px-14 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-brand-lavender"
          >
            카카오톡 문의
          </a>
        </div>

        {/* 신뢰 지표 줄 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-navy/70 text-sm animate-slide-up" style={{ animationDelay: '550ms', animationFillMode: 'both' }}>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" /> 무료 진단
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" style={{ animationDelay: '0.5s' }} /> 의료법 100% 준수
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" style={{ animationDelay: '1s' }} /> 95% 재계약율
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-brand-navy/60">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-navy/50 to-transparent animate-pulse" />
      </div>
    </Section>
  );
};

export default Hero;
