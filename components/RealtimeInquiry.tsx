import React, { useState, useEffect } from 'react';
import { getInquiryActivity } from '../constants';
import Section from './Section';
import FadeInSection from './FadeInSection';
import { MapPin, Building2, Zap, Clock, Activity } from 'lucide-react';

const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / 86400000);
  return `${diffDays}일 전`;
};

const InquiryRow: React.FC<{
  hospital: string;
  category: string;
  location: string;
  date: Date;
}> = ({ hospital, category, location, date }) => (
  <div className="flex items-center justify-between gap-4 px-5 py-2.5 flex-shrink-0">
    <div className="flex items-center gap-3 min-w-0 flex-1">
      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center">
        <Building2 size={14} className="text-brand-navy" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-brand-navy text-sm truncate">{hospital}</p>
        <p className="text-xs text-brand-navy/70 flex items-center gap-1">
          <MapPin size={10} className="flex-shrink-0" />
          {location} · {category}
        </p>
      </div>
    </div>
    <span className="flex-shrink-0 text-xs text-brand-navy/70 font-medium">
      {formatRelativeTime(date)}
    </span>
  </div>
);

const RealtimeInquiry: React.FC = () => {
  const [inquiries, setInquiries] = useState<ReturnType<typeof getInquiryActivity>>([]);

  useEffect(() => {
    setInquiries(getInquiryActivity());
  }, []);

  if (inquiries.length === 0) return null;

  return (
    <Section background="slate" padding="none" className="relative overflow-hidden py-14 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-brand-lavender/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-200/20 rounded-full blur-[90px] animate-float-reverse" />
        <div className="absolute top-[25%] left-[10%] opacity-20 animate-bounce-soft">
          <Zap size={24} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[45%] right-[8%] opacity-15 animate-pulse">
          <Activity size={20} className="text-brand-navy" />
        </div>
        <div className="absolute bottom-[35%] left-[12%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Clock size={22} className="text-brand-rose" />
        </div>
        <div className="absolute bottom-[20%] right-[12%] opacity-15 animate-wiggle">
          <Building2 size={18} className="text-brand-lavender" />
        </div>
        <div className="absolute top-[60%] right-[5%] w-2 h-2 rounded-full bg-brand-lavender/40 animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="relative z-10">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender/20 text-brand-navy text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-lavender animate-pulse" />
              실시간
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy leading-tight tracking-tight mb-2">
              <span className="text-highlight-strong">실시간</span> 문의 현황
            </h2>
            <p className="text-brand-navy/80 text-sm">최근 상담 문의가 등록된 병원입니다.</p>
          </div>
        </FadeInSection>

        <div className="max-w-2xl mx-auto">
          <div className="marquee-up-container h-[200px] overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-rose shadow-sm">
            <div className="animate-marquee-up flex flex-col">
              {[...inquiries, ...inquiries].map((item, i) => (
                <InquiryRow
                  key={`${item.hospital}-${item.location}-${i}`}
                  hospital={item.hospital}
                  category={item.category}
                  location={item.location}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RealtimeInquiry;
