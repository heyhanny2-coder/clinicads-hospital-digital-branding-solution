import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  variant?: 'light' | 'dark';
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'light' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mailtoFallback, setMailtoFallback] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    hospitalName: '',
    region: '',
    department: '',
    phone: '',
    message: ''
  });

  const CONTACT_EMAIL = 'wtp_ph@wiztheplanning.com';
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=상담 문의 - ${encodeURIComponent(formData.hospitalName || '병원')}&body=${encodeURIComponent(
    `성함: ${formData.name}\n연락처: ${formData.phone}\n병원명: ${formData.hospitalName}\n진료과: ${formData.department}\n지역: ${formData.region}\n\n문의 내용:\n${formData.message}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setMailtoFallback(false);

    if (!formData.name.trim()) {
      setErrorMessage('성함을 입력해주세요.');
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('연락처를 입력해주세요.');
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!formData.hospitalName.trim()) {
      setErrorMessage('병원명을 입력해주세요.');
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!formData.department) {
      setErrorMessage('진료과를 선택해주세요.');
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const isEmailJsConfigured = Boolean(serviceId && templateId && publicKey);

    if (isEmailJsConfigured) {
      try {
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

        setSubmitted(true);
      } catch (error) {
        console.error('Failed to send email:', error);
        setErrorMessage('이메일 전송에 실패했습니다. 아래 링크로 직접 문의해 주세요.');
        setMailtoFallback(true);
        errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setMailtoFallback(true);
      setErrorMessage('이메일 서비스 설정이 필요합니다. 아래 링크로 직접 문의해 주세요.');
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setIsSubmitting(false);
  };

  const isLight = variant === 'light';

  const formStyles = {
    container: isLight
      ? 'bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm'
      : 'bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12',
    label: isLight ? 'text-slate-600' : 'text-gray-400',
    input: isLight
      ? 'w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
      : 'w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors',
    select: isLight
      ? 'w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none'
      : 'w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none',
    option: isLight ? 'bg-white text-slate-900' : 'bg-black text-white',
    button: isLight
      ? 'w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:opacity-50 text-white font-bold text-base py-6 rounded-xl transition-all flex items-center justify-center gap-3'
      : 'w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:opacity-50 text-white font-black text-xl py-6 rounded-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-2xl',
    footer: isLight ? 'text-slate-500' : 'text-gray-600',
  };

  if (submitted) {
    return (
      <div className={isLight ? 'bg-blue-50 border border-blue-100 rounded-2xl p-12 text-center animate-fade-in' : 'bg-white/5 border border-white/10 rounded-3xl p-12 text-center animate-fade-in'}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isLight ? 'bg-blue-100 text-blue-600' : 'bg-green-500/20 text-green-500'}`}>
          <CheckCircle size={36} />
        </div>
        <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>상담 신청이 완료되었습니다!</h3>
        <p className={isLight ? 'text-slate-600 mb-8' : 'text-gray-400 mb-8'}>전문 마케팅 컨설턴트가 영업일 기준 24시간 이내에 연락드리겠습니다.</p>
        <button
          onClick={() => setSubmitted(false)}
          className={isLight ? 'text-blue-600 font-bold hover:text-blue-700 hover:underline' : 'text-red-500 font-bold hover:underline'}
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className={formStyles.container}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <div ref={errorRef} className={`p-4 rounded-xl text-sm ${isLight ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
            <p className="font-medium mb-3">{errorMessage}</p>
            {mailtoFallback && (
              <a
                href={mailtoLink}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-colors ${isLight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 hover:bg-white/30 text-white'}`}
              >
                이메일로 직접 문의하기
              </a>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>성함 <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="홍길동"
              className={formStyles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>연락처 <span className="text-red-500">*</span></label>
            <input
              type="tel"
              placeholder="010-0000-0000"
              className={formStyles.input}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>병원명 <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="클리닉애즈 정형외과"
              className={formStyles.input}
              value={formData.hospitalName}
              onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>진료과 <span className="text-red-500">*</span></label>
            <select
              className={formStyles.select}
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              disabled={isSubmitting}
            >
              <option value="" className={formStyles.option}>진료과를 선택해주세요</option>
              <option value="정형외과" className={formStyles.option}>정형외과</option>
              <option value="피부과" className={formStyles.option}>피부과</option>
              <option value="치과" className={formStyles.option}>치과</option>
              <option value="내과" className={formStyles.option}>내과</option>
              <option value="성형외과" className={formStyles.option}>성형외과</option>
              <option value="기타" className={formStyles.option}>기타</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>지역</label>
          <input
            type="text"
            placeholder="예: 서울 강남구"
            className={formStyles.input}
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label className={`text-xs font-bold tracking-widest uppercase ${formStyles.label}`}>문의내용 (선택)</label>
          <textarea
            rows={4}
            placeholder="구체적인 고민이나 현재 마케팅 현황을 남겨주시면 더 정확한 진단이 가능합니다."
            className={formStyles.input}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={formStyles.button}
        >
          {isSubmitting ? (
            <>
              전송 중...
              <Loader2 size={22} className="animate-spin" />
            </>
          ) : (
            <>
              무료 진단 & 상담 신청하기
              <Send size={22} />
            </>
          )}
        </button>

        <p className={`text-[10px] text-center uppercase tracking-widest ${formStyles.footer}`}>
          Your data is safe with us. We only use it to provide you with the best diagnosis.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
