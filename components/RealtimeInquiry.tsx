import React, { useState, useEffect } from 'react';
import { getInquiryActivity } from '../constants';
import Section from './Section';
import FadeInSection from './FadeInSection';
import { MapPin, Building2 } from 'lucide-react';

const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return '방금 전';
  if (diffMins < 60) return `${diffMins}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;
  return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
};

const RealtimeInquiry: React.FC = () => {
  const [inquiries, setInquiries] = useState<ReturnType<typeof getInquiryActivity>>([]);

  useEffect(() => {
    setInquiries(getInquiryActivity());
  }, []);

  return (
    <Section background="slate" padding="large" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-emerald-300/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-300/12 rounded-full blur-[90px]" />
      </div>
      <div className="relative z-10">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              실시간
            </div>
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-blue-600 mb-6">
              Inquiry Status
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              실시간 문의 현황
            </h2>
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              최근 상담 문의가 등록된 병원입니다.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {inquiries.map((item, i) => (
                <FadeInSection key={`${item.hospital}-${i}`} delay={i * 50}>
                  <div className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Building2 size={18} className="text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">
                          {item.hospital}
                        </p>
                        <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin size={12} className="flex-shrink-0" />
                          {item.location} · {item.category}
                        </p>
                      </div>
                    </div>
                    <span className="flex-shrink-0 text-sm text-slate-500 font-medium">
                      {formatRelativeTime(item.date)}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RealtimeInquiry;
