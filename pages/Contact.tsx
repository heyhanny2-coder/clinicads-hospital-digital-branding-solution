
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h1 className="text-sm font-bold text-red-500 tracking-[0.3em] mb-6 uppercase">Get In Touch</h1>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
              당신의 병원을<br />
              <span className="text-gray-500">진단해 드립니다.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              불확실한 마케팅 대신, 데이터와 구조에 기반한 전략을 제안합니다. 
              지금 신청하시면 현재 병원의 온라인 현황(플레이스/키워드)을 무료로 진단해 드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-xl font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-xl font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Kakao Channel</h4>
                  <p className="text-xl font-medium">@위즈더플래닝마케팅</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
