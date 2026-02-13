import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 3;

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = Array.from({ length: Math.ceil(PORTFOLIO.length / ITEMS_PER_PAGE) }, (_, i) =>
    PORTFOLIO.slice(i * ITEMS_PER_PAGE, (i + 1) * ITEMS_PER_PAGE)
  );
  const maxIndex = pages.length - 1;
  const clampedIndex = Math.min(Math.max(0, currentIndex), maxIndex);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-[10px] font-bold text-blue-400 tracking-[0.25em] uppercase mb-4">Case Studies</p>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-6">결과로 증명합니다.</h1>
          <p className="text-slate-300 text-sm font-normal leading-relaxed max-w-xl mx-auto">
            수많은 병원이 ClinicAds와 함께 브랜드의 가치를 높이고 지속 가능한 성장 구조를 만들었습니다.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${clampedIndex * 100}%)` }}
            >
              {pages.map((pageItems, pageIdx) => (
                <div key={pageIdx} className="flex-shrink-0 w-full min-w-full flex gap-4">
                  {pageItems.map((item) => (
                    <div key={item.id} className="flex-1 min-w-0">
                      <div className="group relative bg-white/[0.06] border border-white/15 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 flex flex-col min-h-[220px] justify-between h-full">
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-blue-500/30 group-hover:bg-blue-400 rounded-l-2xl" />
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-blue-400 text-[9px] font-bold tracking-[0.15em] uppercase bg-blue-500/15 px-2.5 py-0.5 rounded-full">
                              {item.category}
                            </span>
                            <span className="text-slate-400 text-[9px] font-semibold tracking-[0.08em] uppercase">
                              {item.location}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-5 leading-tight">
                            {item.title}
                          </h3>

                          {item.review && (
                            <div className="relative pt-4 border-t border-white/10">
                              <Quote className="absolute -top-2 left-0 text-blue-400/25 w-5 h-5" />
                              <p className="text-slate-300 text-sm leading-relaxed italic font-normal">
                                "{item.review}"
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-[9px] font-bold tracking-widest text-slate-400 uppercase group-hover:text-blue-400 transition-colors">
                          <span>View Case Study</span>
                          <div className="w-6 h-[1px] bg-slate-600 group-hover:bg-blue-400 transition-all" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goPrev}
            disabled={clampedIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all z-10"
            aria-label="이전"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            disabled={clampedIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all z-10"
            aria-label="다음"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === clampedIndex ? 'bg-blue-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`${i + 1}번째 슬라이드`}
            />
          ))}
        </div>

        <div className="mt-20">
          <p className="text-slate-400 italic font-serif text-base text-center mb-8">
            "마케팅은 광고비 소모가 아니라, 신뢰의 축적입니다."
          </p>
          <div className="overflow-hidden marquee-container">
            <div className="flex animate-marquee w-max">
              {[...PORTFOLIO, ...PORTFOLIO].map((p, i) => (
                <span
                  key={`${p.id}-${i}`}
                  className="flex-shrink-0 text-sm font-bold italic whitespace-nowrap text-slate-400/70 px-8"
                >
                  {p.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
