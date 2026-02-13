import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 라우트 변경 시 스크롤을 페이지 상단으로 이동시킵니다.
 * React Router는 기본적으로 페이지 전환 시 스크롤 위치를 유지하므로,
 * 사용자가 새 페이지에서 위로 스크롤해야 할 수 있는 문제를 해결합니다.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
