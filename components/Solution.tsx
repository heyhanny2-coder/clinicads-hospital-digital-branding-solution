
import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import FadeInSection from './FadeInSection';

const Solution: React.FC = () => {
  const points = [
    { id: '01', title: '맞춤형 1:1 컨설팅', text: '당신의 병원만을 위한 현황 분석으로, 가장 효과적인 전환 경로를 설계합니다.' },
    { id: '02', title: '강점 발견 & 강조', text: '병원의 숨겨진 강점을 찾아, 환자가 선택해야 할 이유를 분명히 합니다.' },
    { id: '03', title: '효율적 투자 설계', text: '광고비를 줄이면서 신뢰는 쌓이도록, 맞춤형 전략을 제안합니다.' },
    { id: '04', title: '24/7 리스크 관리', text: '악성 리뷰·부정적 노출을 예방하는 철저한 모니터링으로 병원 평판을 지킵니다.' },
    { id: '05', title: '투명한 진행 공유', text: '매체별 일정과 성과를 실시간 공유해, 원장님이 언제든 확인하실 수 있습니다.' },
    { id: '06', title: '끊임없는 동행', text: '한 번 시작하면, 결과가 나올 때까지 끝까지 함께합니다.' },
  ];

  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-cyan-300/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-300/12 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-200/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-28">
        <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-blue-600 mb-8">
          Transformation
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-10">
          광고비 지출에서<br />
          <span className="text-slate-600">신뢰 축적 구조로 전환하세요.</span>
        </h2>
        <p className="text-slate-600 text-base font-normal leading-relaxed mb-14">
          ClinicAds는 단순 광고 대행이 아닙니다. 환자가 검색할 때 발견되고, 믿고, 예약하는—<strong className="text-slate-700 font-semibold">병원만의 신뢰 설계</strong>를 함께 만듭니다.
        </p>
        <Link
          to="/services"
          className="inline-block text-blue-600 font-semibold text-base tracking-[0.15em] uppercase border-b-2 border-blue-600 pb-2 hover:text-blue-700 transition-colors"
        >
          서비스 자세히 보기
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 80}>
            <div
              className="p-14 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl font-black text-blue-600/80 block mb-10 font-serif italic">
                {p.id}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-5 tracking-tight">
                {p.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed font-normal">
                {p.text}
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

export default Solution;
