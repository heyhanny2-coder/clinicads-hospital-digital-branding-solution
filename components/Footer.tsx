
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-black italic mb-6 block text-slate-900">
              Clinic<span className="text-blue-600">Ads</span>
            </Link>
            <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-normal">
              병원의 성장을 돕는 가장 신뢰받는 파트너.<br />
              광고를 넘어 브랜딩의 가치를 창출합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-widest uppercase mb-6">SERVICES</h4>
            <ul className="space-y-4 text-[13px] text-slate-600 font-normal">
              <li>네이버 플레이스 최적화</li>
              <li>브랜드 블로그 운영</li>
              <li>리뷰·지식인 관리</li>
              <li>병원 전문 SNS 마케팅</li>
              <li>홈페이지 제작</li>
              <li>영상 제작·촬영</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-widest uppercase mb-6">COMPANY</h4>
            <ul className="space-y-4 text-[13px] text-slate-600 font-normal leading-relaxed">
              <li>{CONTACT_INFO.companyName}</li>
              <li>대표: {CONTACT_INFO.representative}</li>
              <li>사업자등록번호: {CONTACT_INFO.businessNumber}</li>
              <li>주소: {CONTACT_INFO.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-widest uppercase mb-6">CONTACT</h4>
            <ul className="space-y-4 text-[13px] text-slate-600 font-normal">
              <li>고객센터: {CONTACT_INFO.phone}</li>
              <li>Email: {CONTACT_INFO.email}</li>
              <li>Kakao: @위즈더플래닝</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] uppercase tracking-[0.2em] font-medium">
          <p>© 2025 CLINICADS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
