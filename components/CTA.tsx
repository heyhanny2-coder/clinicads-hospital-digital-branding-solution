
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import Section from './Section';

const CTA: React.FC = () => {
  return (
    <Section background="blue" padding="large" centered containerSize="narrow" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-brand-lavender/25 via-brand-pink/20 to-brand-rose/25 rounded-full blur-[150px] animate-blob-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-brand-pink/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-lavender/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(205,159,204,0.12)_0%,transparent_50%)]" />
      </div>
      <div className="relative z-10">
      <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-brand-navy mb-10">
        무료로 시작하세요
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-12">
        투자 전에,<br />
        <span className="text-brand-navy/80">병원이 환자에게 어떻게 보이는지 먼저 확인하세요.</span>
      </h2>
      <p className="text-brand-navy/80 text-base font-normal mb-12 max-w-xl mx-auto">
        플레이스·키워드 현황을 <strong className="text-brand-navy font-semibold">무료로 진단</strong>해 드립니다.<br />
        비용 부담 없이, 당신의 병원이 할 수 있는 것을 먼저 보여드립니다.
      </p>
      <p className="text-sm text-brand-navy/80 font-medium mb-16">
        ✓ 비밀 유지  ✓ 상담만 받고 거절해도 됩니다
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-white px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-brand-lavender/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            무료 진단 신청 (선택 사항 없음)
          </Link>
        <a
          href="https://clickadzcount.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border border-brand-rose px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
        >
          맞춤 견적 받아보기
        </a>
        <a
          href={CONTACT_INFO.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border border-brand-rose px-16 py-6 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
        >
          카카오톡 빠른 상담
        </a>
      </div>
      </div>
    </Section>
  );
};

export default CTA;
