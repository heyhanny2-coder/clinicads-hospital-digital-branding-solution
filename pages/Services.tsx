import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import Section from '../components/Section';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Section background="white" padding="large">
        <div className="max-w-3xl mb-24">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-blue-600 mb-6">
            Our Expertise
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-10">
            의료업종 특화<br />
            <span className="text-slate-600">디지털 브랜딩 라인업</span>
          </h1>
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            단순히 서비스를 나열하지 않습니다.<br />
            각 채널이 하나의 브랜드를 향해 작동하도록 유기적으로 운영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Layers;
            return (
              <div
                key={service.id}
                className="p-12 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-10 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 font-normal text-base leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 text-[15px] font-normal">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-32 p-12 bg-blue-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg shadow-blue-200">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">어떤 서비스를 선택해야 할지 고민되시나요?</h3>
            <p className="text-white/90 font-normal">병원의 현재 상황을 진단하고 최적의 패키지를 제안해 드립니다.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://clickadzcount.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-full font-bold text-base transition-all text-center"
            >
              맞춤 견적 받아보기
            </a>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-slate-50 px-10 py-5 rounded-full font-bold text-base transition-all text-center"
            >
              진단 문의하기
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
