
import React from 'react';
import { CheckCircle2, Search, Users, Shield, TrendingUp } from 'lucide-react';

const Solution: React.FC = () => {
  const points = [
    { icon: <Shield size={32} />, title: '의료법 준수 콘텐츠', text: '합법의 테두리 안에서 가장 매력적인 메시지를 도출합니다.' },
    { icon: <Search size={32} />, title: '검색 기반 노출 설계', text: '환자가 찾는 키워드에 병원이 가장 먼저 발견되도록 합니다.' },
    { icon: <TrendingUp size={32} />, title: '진료과별 키워드 전략', text: '일률적인 마케팅이 아닌 진료과 특성에 맞춘 고관여 전략.' },
    { icon: <Users size={32} />, title: '통합 관리 시스템', text: '리뷰, 플레이스, SNS가 하나의 브랜드로 통합되어 시너지를 냅니다.' },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-6 uppercase">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                ClinicAds는 광고 대행이 아닙니다.<br />
                <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">신뢰 설계 시스템</span>입니다.
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                단순히 클릭을 유도하는 광고를 넘어, 환자가 검색한 순간부터 
                신뢰를 얻고 예약을 결정하기까지의 모든 경험을 체계적으로 설계합니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {points.map((p, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="text-red-500">{p.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{p.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img 
                src="https://picsum.photos/seed/hospital/1000/1200" 
                alt="Hospital Solution" 
                className="rounded-2xl shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-8 rounded-xl max-w-[240px] shadow-2xl backdrop-blur-xl">
                <p className="text-red-500 font-black text-4xl mb-2">98%</p>
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Consultation Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
