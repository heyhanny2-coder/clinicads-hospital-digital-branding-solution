import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Shield, TrendingUp, Users, Search, Heart, Sparkles, PenTool, Layout, MessageSquare, Instagram, Globe, Video } from 'lucide-react';
import Section from './Section';

const ROTATING_PHRASES = ['신뢰가 쌓이는 병원', '검색에서 발견되는 병원', '환자가 찾는 병원'];

const SERVICE_TAGS = [
  { icon: PenTool, label: '검색·콘텐츠' },
  { icon: Layout, label: '플레이스' },
  { icon: MessageSquare, label: '리뷰' },
  { icon: Instagram, label: 'SNS' },
  { icon: Globe, label: '홈페이지' },
  { icon: Video, label: '영상' },
];

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

  const trustStats = [
    { value: '120+', label: '병원' },
    { value: '95%', label: '재계약' },
    { value: '8년', label: '경력' },
  ];

  return (
    <Section
      background="transparent"
      padding="none"
      containerSize="default"
      centered
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28"
    >
      {/* 배경: 화려한 컬러풀 오브 + 메시 그라데이션 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 오로라 그라데이션 베이스 */}
        <div className="absolute inset-0 hero-aurora" />
        {/* 베이스 그라데이션 블롭 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-br from-slate-100/90 via-slate-50/70 to-slate-100/80 rounded-full blur-[200px] animate-gradient-flow" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-slate-100/60 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-slate-200/40 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-slate-100/50 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-slate-200/30 rounded-full blur-[80px] animate-float" />
        {/* 화려한 브랜드 컬러 블롭 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-brand-lavender/35 via-brand-pink/25 to-brand-rose/30 rounded-full blur-[200px] hero-gradient-morph" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-lavender/30 rounded-full blur-[180px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-brand-rose/25 rounded-full blur-[150px] animate-float-reverse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-brand-pink/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-0 w-[280px] h-[280px] bg-brand-lavender/25 rounded-full blur-[110px] animate-float-reverse" style={{ animationDelay: '2.5s' }} />
        {/* 광선 스윕 효과 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[100%] h-[120%] hero-light-sweep bg-gradient-to-r from-transparent via-brand-lavender/30 to-transparent origin-left" style={{ animationDelay: '0s' }} />
          <div className="absolute top-0 left-0 w-[90%] h-[110%] hero-light-sweep bg-gradient-to-r from-transparent via-brand-pink/25 to-transparent origin-left" style={{ animationDelay: '4s' }} />
        </div>
        {/* 중앙 방사형 빛 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(205,159,204,0.25)_0%,rgba(205,159,204,0.08)_40%,transparent_70%)] hero-radial-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_70%,rgba(228,194,198,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_30%,rgba(246,202,202,0.18)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,1,79,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,1,79,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* 반짝이는 파티클 */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-lavender hero-sparkle"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`r-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-rose/80 hero-sparkle"
            style={{
              left: `${20 + (i * 9) % 70}%`,
              top: `${25 + (i * 7) % 60}%`,
              animationDelay: `${i * 0.4 + 0.5}s`,
            }}
          />
        ))}
        {/* 노이즈 텍스처 */}
        <div className="absolute inset-0 hero-grain mix-blend-overlay" />
        {/* 플로팅 장식 아이콘 */}
        <div className="absolute top-[15%] left-[12%] opacity-30 animate-bounce-soft">
          <Search size={28} className="text-brand-lavender drop-shadow-sm" />
        </div>
        <div className="absolute top-[25%] right-[15%] opacity-35 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={24} className="text-brand-lavender fill-brand-lavender/40 drop-shadow-sm" />
        </div>
        <div className="absolute bottom-[35%] left-[18%] opacity-30 animate-float-reverse" style={{ animationDelay: '2s' }}>
          <Sparkles size={22} className="text-brand-navy drop-shadow-sm" />
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-30 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
          <TrendingUp size={26} className="text-brand-lavender drop-shadow-sm" />
        </div>
        <div className="absolute top-[40%] right-[8%] opacity-25 animate-wiggle">
          <Sparkles size={18} className="text-brand-navy drop-shadow-sm" />
        </div>
        <div className="absolute bottom-[45%] left-[8%] opacity-15 animate-spin-slow">
          <div className="w-3 h-3 rounded-full bg-brand-lavender/40" />
        </div>
        <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-brand-lavender/30 animate-bounce-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[70%] right-[7%] w-8 h-8 rounded-full border-2 border-brand-lavender/20 animate-spin-slow" />
        <div className="absolute top-[20%] left-[25%] opacity-10">
          <Heart size={16} className="text-brand-lavender animate-float" />
        </div>
        {/* 추가 장식 도형 */}
        <div className="absolute top-[10%] right-[20%] w-16 h-16 rounded-2xl border-2 border-brand-lavender/25 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-12 h-12 rounded-full bg-brand-rose/20 animate-float-reverse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[55%] left-[20%] w-20 h-20 rounded-3xl border-2 border-brand-lavender/20 -rotate-6 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[30%] right-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-brand-lavender/20 to-transparent animate-blob-pulse" />
        <div className="absolute bottom-[15%] left-[15%] w-14 h-14 rounded-xl border-2 border-brand-pink/20 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[65%] right-[20%] w-10 h-10 rounded-full bg-brand-lavender/25 animate-bounce-soft" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* 메인 콘텐츠 */}
          <div className="flex-1">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-brand-rose/80 shadow-sm text-brand-navy text-xs font-medium animate-scale-in hover:border-brand-lavender hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
                >
                  {badge.icon && <badge.icon size={12} className="text-brand-navy" />}
                  {badge.text}
                </span>
              ))}
            </div>

            <p className="text-[10px] md:text-xs font-medium tracking-[0.35em] uppercase text-brand-navy mb-5 animate-slide-up text-center lg:text-left" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              클리닉애즈 ClinicAds
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10 animate-slide-up" style={{ animationDelay: '220ms', animationFillMode: 'both' }}>
              <p className="text-xs font-medium tracking-[0.2em] text-brand-navy/80">8년간</p>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-lavender/20 text-brand-navy font-bold text-xs animate-float-up border border-brand-lavender/30">
                <Users size={14} />
                <span className="text-emphasis-lavender">120+ 병원</span>
              </span>
              <p className="text-xs font-medium tracking-[0.2em] text-brand-navy/80">이 선택한 의료 전문 마케팅</p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-[1.35] tracking-tight mb-12 animate-slide-up relative text-center lg:text-left" style={{ animationDelay: '250ms', animationFillMode: 'both' }}>
              광고비가 아까우신 원장님,<br />
              <span className="text-brand-navy/80">이제 <span className="text-highlight-strong">신뢰가 쌓이는 구조</span>로 바꾸세요.</span>
              <span className="absolute -top-1 -right-1 md:right-2 opacity-30 animate-bounce-soft hidden sm:block">
                <Sparkles size={24} className="text-brand-lavender" />
              </span>
            </h1>

            <div className="mb-12 animate-slide-up text-center lg:text-left" style={{ animationDelay: '350ms', animationFillMode: 'both' }}>
              <p className="text-sm md:text-base text-brand-navy/80 font-normal max-w-[540px] mx-auto lg:mx-0 leading-loose">
                <span className="text-emphasis">검색 → 신뢰 → 예약</span>—환자가 찾고, 믿고, 예약하는<br className="hidden md:block" />
                <span className="text-highlight">병·의원 전용</span> 디지털 브랜딩 솔루션
              </p>
              <p key={phraseIndex} className="mt-5 text-sm font-bold text-slate-400 min-h-[22px] animate-fade-in">
                <span className="typing-cursor">{ROTATING_PHRASES[phraseIndex]}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-14 animate-slide-up" style={{ animationDelay: '450ms', animationFillMode: 'both' }}>
              <Link
                to="/contact"
                className="group/btn btn-shine w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-white px-12 py-5 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-brand-lavender/30 hover:shadow-brand-lavender/50 hover:-translate-y-0.5 hover:scale-105 active:scale-100 relative overflow-hidden animate-glow-pulse"
              >
                <span className="relative z-10">무료 진단 받기</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </Link>
              <a
                href={CONTACT_INFO.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-rose px-12 py-5 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-brand-lavender"
              >
                카카오톡 문의
              </a>
            </div>

            {/* 신뢰 지표 + 서비스 태그 */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 animate-slide-up pt-2" style={{ animationDelay: '550ms', animationFillMode: 'both' }}>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-brand-navy/70 text-xs">
                <span className="flex items-center gap-1.5 hover:text-brand-lavender transition-colors cursor-default">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" /> 무료 진단
                </span>
                <span className="flex items-center gap-1.5 hover:text-brand-lavender transition-colors cursor-default">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" style={{ animationDelay: '0.5s' }} /> 의료법 100% 준수
                </span>
                <span className="flex items-center gap-1.5 hover:text-brand-lavender transition-colors cursor-default">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-lavender animate-pulse" style={{ animationDelay: '1s' }} /> 95% 재계약율
                </span>
              </div>
              <div className="h-px sm:h-4 w-px sm:w-px bg-brand-rose/30 hidden sm:block" />
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICE_TAGS.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-sm border border-brand-rose/40 text-brand-navy/80 text-[11px] font-medium hover:border-brand-lavender/50 hover:text-brand-navy hover:bg-white/80 transition-all duration-300 cursor-default"
                  >
                    <tag.icon size={10} className="text-brand-lavender flex-shrink-0" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 우측: 신뢰 지표 카드 (데스크톱) */}
          <div className="hidden lg:flex flex-col gap-5 w-64 flex-shrink-0 mt-16 lg:mt-0">
            {trustStats.map((stat, i) => (
              <div
                key={i}
                className="animate-slide-up flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-brand-rose/60 shadow-sm hover:shadow-md hover:border-brand-lavender/50 hover:-translate-x-1 transition-all duration-300"
                style={{ animationDelay: `${600 + i * 80}ms`, animationFillMode: 'both' }}
              >
                <span className="text-2xl font-extrabold text-brand-navy font-serif italic text-gradient-brand">{stat.value}</span>
                <span className="text-xs font-medium text-brand-navy/80 tracking-wide">{stat.label}</span>
              </div>
            ))}
            <div className="animate-slide-up p-4 rounded-xl bg-brand-lavender/15 border border-brand-lavender/30" style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
              <p className="text-[11px] text-brand-navy/80 leading-relaxed">
                검색·플레이스·리뷰·SNS를 하나의 브랜드로 연결합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 모바일: 신뢰 지표 카드 */}
        <div className="lg:hidden flex justify-center gap-3 mt-14 animate-slide-up">
          {trustStats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 max-w-[100px] flex flex-col items-center p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-brand-rose/60 shadow-sm"
            >
              <span className="text-lg font-extrabold text-brand-navy font-serif italic text-gradient-brand">{stat.value}</span>
              <span className="text-[10px] font-medium text-brand-navy/80 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-brand-navy/60">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-navy/50 to-transparent animate-pulse" />
      </div>
    </Section>
  );
};

export default Hero;
