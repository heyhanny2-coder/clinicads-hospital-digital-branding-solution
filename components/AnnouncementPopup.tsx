import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'clinicads_announcement_closed';

const AnnouncementPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem(STORAGE_KEY);
    if (!closed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-fade-in"
        role="dialog"
        aria-labelledby="announcement-title"
        aria-modal="true"
      >
        <div className="bg-blue-600 px-6 py-4">
          <h2 id="announcement-title" className="text-white font-bold text-lg">
            공지사항
          </h2>
        </div>
        <div className="p-6 space-y-4 text-slate-700 text-[15px] leading-relaxed">
          <p>
            진단서 및 견적서 발송을 위해 <strong className="text-slate-800">병원명, 성함, 직책</strong> 등의 기본정보 확인이 필요합니다.
          </p>
          <p>
            정보가 정확히 확인되지 않을 경우 발송이 어려우니, 상담 문의 시 신상정보를 꼼꼼히 입력해 주시기 바랍니다.
          </p>
          <p className="text-slate-600 text-sm">
            ※ 병원을 사칭하는 경우 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </div>
        <div className="px-6 pb-6">
          <button
            onClick={handleClose}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            확인
          </button>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="닫기"
        >
          <X size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
