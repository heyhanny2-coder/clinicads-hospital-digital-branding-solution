
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Gift, Sparkles, MessageCircle } from 'lucide-react';
import Section from './Section';

const CTA: React.FC = () => {
  return (
    <Section background="blue" padding="large" centered containerSize="narrow" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-brand-lavender/25 via-brand-pink/20 to-brand-rose/25 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-brand-pink/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-lavender/20 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(205,159,204,0.12)_0%,transparent_50%)]" />
        <div className="absolute top-[25%] left-[15%] opacity-20 animate-bounce-soft">
          <Gift size={28} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[40%] right-[12%] opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={24} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[35%] left-[10%] opacity-20 animate-wiggle">
          <MessageCircle size={22} className="text-brand-lavender" />
        </div>
        <div className="absolute bottom-[25%] right-[18%] opacity-15 animate-float-reverse" style={{ animationDelay: '0.5s' }}>
          <Gift size={18} className="text-brand-rose" />
        </div>
        <div className="absolute top-[55%] right-[8%] w-2 h-2 rounded-full bg-brand-lavender/40 animate-bounce-soft" />
        <div className="absolute bottom-[45%] left-[8%] w-4 h-4 rounded-full border-2 border-brand-lavender/25 animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(205,159,204,0.08)_0%,transparent_50%)]" />
      </div>
      <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/20 border border-brand-rose/50 text-brand-navy text-xs font-medium mb-10 animate-float-up">
        <Gift size={12} className="text-brand-lavender" />
        무료로 시작하세요
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-12">
        <span className="text-highlight">투자 전에</span>,<br />
        <span className="text-brand-navy/80">병원이 환자에게 어떻게 보이는지 먼저 확인하세요.</span>
      </h2>
      <p className="text-brand-navy/80 text-base font-normal mb-12 max-w-xl mx-auto">
        플레이스·키워드 현황을 <span className="text-highlight-strong">무료로 진단</span>해 드립니다.<br />
        비용 부담 없이, 당신의 병원이 할 수 있는 것을 먼저 보여드립니다.
      </p>
      <p className="text-sm text-brand-navy/80 font-medium mb-16 flex flex-wrap justify-center gap-x-6 gap-y-1">
        <span className="flex items-center gap-1.5 hover:text-brand-lavender transition-colors cursor-default">
          <span className="text-brand-lavender">✓</span> 비밀 유지
        </span>
        <span className="flex items-center gap-1.5 hover:text-brand-lavender transition-colors cursor-default">
          <span className="text-brand-lavender">✓</span> 상담만 받고 거절해도 됩니다
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contact"
            className="btn-shine w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-white px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-brand-lavender/30 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            무료 진단 신청 (선택 사항 없음)
          </Link>
        <a
          href="https://clickadzcount.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border border-brand-rose px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-brand-lavender hover:-translate-y-0.5"
        >
          맞춤 견적 받아보기
        </a>
        <a
          href={CONTACT_INFO.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border border-brand-rose px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-brand-lavender hover:-translate-y-0.5"
        >
          카카오톡 빠른 상담
        </a>
      </div>
      </div>
    </Section>
  );
};

export default CTA;
