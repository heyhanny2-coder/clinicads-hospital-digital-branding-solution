import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Section from '../components/Section';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Section background="white" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-brand-navy mb-6">
              Get In Touch
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-8">
              당신의 병원을<br />
              <span className="text-brand-navy/80">진단해 드립니다.</span>
            </h1>
            <p className="text-brand-navy/80 text-base font-normal leading-relaxed mb-12">
              불확실한 마케팅 대신, 데이터와 구조에 기반한 전략을 제안합니다.
              지금 신청하시면 현재 병원의 온라인 현황(플레이스/키워드)을 무료로 진단해 드립니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-light border border-brand-rose rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-pink transition-colors flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy/70 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-brand-navy font-semibold text-lg">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-light border border-brand-rose rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-pink transition-colors flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy/70 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-brand-navy font-semibold text-lg">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-light border border-brand-rose rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-pink transition-colors flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy/70 uppercase tracking-widest mb-1">Kakao Channel</h4>
                  <p className="text-brand-navy font-semibold text-lg">@위즈더플래닝마케팅</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm variant="light" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
