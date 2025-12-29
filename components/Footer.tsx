
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black italic mb-6 block">
              Clinic<span className="text-red-500">Ads</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              병원의 성장을 돕는 가장 신뢰받는 파트너.<br />
              광고를 넘어 브랜딩의 가치를 창출합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>네이버 플레이스 최적화</li>
              <li>브랜드 블로그 운영</li>
              <li>병원 전문 SNS 마케팅</li>
              <li>SEO 구조 설계</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">COMPANY</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>{CONTACT_INFO.companyName} | 대표: {CONTACT_INFO.representative}</li>
              <li>사업자등록번호: {CONTACT_INFO.businessNumber}</li>
              <li>주소: {CONTACT_INFO.address}</li>
              <li>개인정보 보호책임자: {CONTACT_INFO.privacyOfficer} ({CONTACT_INFO.privacyEmail})</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>고객센터: {CONTACT_INFO.phone}</li>
              <li>E. {CONTACT_INFO.email}</li>
              <li>운영시간: {CONTACT_INFO.operatingHours}</li>
              <li>Kakao. @위즈더플래닝</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] uppercase tracking-widest">
          <p>© 2025 CLINICADS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
