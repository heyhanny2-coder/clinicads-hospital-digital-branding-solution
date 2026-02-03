
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    hospitalName: '',
    region: '',
    department: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS 설정값
      // VITE_ prefix는 Vite 환경 변수를 사용하기 위함입니다.
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        to_email: 'wtp_ph@wiztheplanning.com',
        from_name: formData.name,
        hospital_name: formData.hospitalName,
        region: formData.region,
        department: formData.department,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully!');
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold mb-4">상담 신청이 완료되었습니다!</h3>
        <p className="text-gray-400 mb-8">전문 마케팅 컨설턴트가 영업일 기준 24시간 이내에 연락드리겠습니다.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-red-500 font-bold hover:underline"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">성함</label>
            <input 
              required
              type="text" 
              placeholder="홍길동"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">연락처</label>
            <input 
              required
              type="tel" 
              placeholder="010-0000-0000"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">병원명</label>
            <input 
              required
              type="text" 
              placeholder="클리닉애즈 정형외과"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
              value={formData.hospitalName}
              onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">진료과</label>
            <select 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              disabled={isSubmitting}
            >
              <option value="" className="bg-black">진료과를 선택해주세요</option>
              <option value="정형외과" className="bg-black">정형외과</option>
              <option value="피부과" className="bg-black">피부과</option>
              <option value="치과" className="bg-black">치과</option>
              <option value="내과" className="bg-black">내과</option>
              <option value="성형외과" className="bg-black">성형외과</option>
              <option value="기타" className="bg-black">기타</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">지역</label>
          <input 
            type="text" 
            placeholder="예: 서울 강남구"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
            value={formData.region}
            onChange={(e) => setFormData({...formData, region: e.target.value})}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">문의내용 (선택)</label>
          <textarea 
            rows={4}
            placeholder="구체적인 고민이나 현재 마케팅 현황을 남겨주시면 더 정확한 진단이 가능합니다."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            disabled={isSubmitting}
          />
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:opacity-50 text-white font-black text-xl py-6 rounded-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-2xl"
        >
          {isSubmitting ? (
            <>
              전송 중...
              <Loader2 size={24} className="animate-spin" />
            </>
          ) : (
            <>
              무료 진단 & 상담 신청하기
              <Send size={24} />
            </>
          )}
        </button>

        <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">
          Your data is safe with us. We only use it to provide you with the best diagnosis.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
