
import React from 'react';
import { Instagram, Layout, MessageSquare, PenTool, Globe, Video } from 'lucide-react';
import { ServiceItem, PortfolioItem, ProcessStep } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'content',
    title: '검색 & 콘텐츠',
    description: '생활정보형 블로그 + 브랜드 블로그 운영',
    icon: 'PenTool',
    details: ['진료과·지역 기반 키워드 설계', 'SEO 구조 설계', '검색 순위 상승 전략', '브랜드 가치 중심 원고 기획', 'AI가 찾아주는 병원 검색 노출 설계']
  },
  {
    id: 'place',
    title: '네이버 플레이스',
    description: '병원의 얼굴, 플레이스 100% 최적화',
    icon: 'Layout',
    details: ['대표사진·소식·쿠폰 세팅', '순위 구조 개선·순위 상승 전략', '편의 기능(예약/톡톡) 활성화']
  },
  {
    id: 'review',
    title: '리뷰 관리',
    description: '환자의 신뢰를 결정하는 마지막 한 조각',
    icon: 'MessageSquare',
    details: ['신뢰감 있는 리뷰 축적', '모0닥·나00닥터 리뷰 축적', '지식인 작업 (예: "00동 괜찮은 치과 추천해주세요" 검색 노출)', '방문자 리뷰 모니터링', '악성·오해성 리뷰 대응 가이드']
  },
  {
    id: 'sns',
    title: 'SNS 마케팅',
    description: '팬덤을 만드는 병원 인스타그램',
    icon: 'Instagram',
    details: ['주 2회 프리미엄 콘텐츠', '신뢰 중심 브랜딩 기획', '환자와의 소통 채널 운영']
  },
  {
    id: 'website',
    title: '홈페이지 제작',
    description: '병원 신뢰의 첫 관문, 브랜드 웹사이트',
    icon: 'Globe',
    details: ['의료법 준수 반응형 웹사이트', '예약·문의 연동', '검색 최적화 구조']
  },
  {
    id: 'video',
    title: '전문가 촬영 & 영상 제작',
    description: '프로급 비주얼로 병원 신뢰도를 높입니다',
    icon: 'Video',
    details: ['전문가 촬영 지원', '영상 제작 및 편집', '각종 디자인 제작 (배너, 홍보물, SNS)', '유튜브·SNS용 콘텐츠 제작']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: '병원 진단', description: '현재 플레이스, 블로그, 경쟁사 키워드 정밀 분석' },
  { step: 2, title: '전략 설계', description: '진료과별 타겟에 맞춘 전환 중심 퍼널 설계' },
  { step: 3, title: '통합 세팅', description: '콘텐츠, 플레이스, 리뷰 환경 동시 구축' },
  { step: 4, title: '운영 및 모니터링', description: '주간/월간 운영 및 데이터 기반 피드백' },
  { step: 5, title: '구조 안정화', description: '지속 가능한 검색 문의 구조 완성' }
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: '1', 
    category: '산부인과', 
    title: '연세아름다운산부인과', 
    location: '서대문구',
    review: '맡긴 뒤 온라인 문의가 엄청 늘었어요! 플레이스 예약도 2배 이상 증가했네요.',
    imageUrl: 'https://images.unsplash.com/photo-1584515159900-e29d78bc9714?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '2', 
    category: '피부과', 
    title: '페이브 피부과의원', 
    location: '용산구',
    review: '블로그와 인스타 운영으로 신규 환자가 많이 늘었어요. 체계적인 관리가 인상적이에요!',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71f1e598c6?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '3', 
    category: '성형외과', 
    title: '셀업성형외과', 
    location: '강남구',
    review: '영상 콘텐츠 덕분에 병원 신뢰도가 높아졌어요. 예약도 훨씬 잘 들어오고요.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '4', 
    category: '피부과', 
    title: '하오덤의원', 
    location: '강남구',
    review: '리뷰 관리 덕분에 평점이 올라가고 검색 노출도 좋아졌어요!',
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '5', 
    category: '성형외과', 
    title: '리드성형외과', 
    location: '강남구',
    review: '통합 브랜딩으로 병원 이미지가 좋아졌어요. 환자 만족도도 높아졌네요.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '6', 
    category: '피부과', 
    title: '파인트리피부과의원', 
    location: '분당구',
    review: '의료법 준수하면서도 효과적인 마케팅이 가능해져 안심이에요!',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '7', 
    category: '한의원', 
    title: '다나슬한의원', 
    location: '중구',
    review: 'SNS 브랜딩으로 젊은 환자 유입이 늘었어요. 병원 전문성도 잘 알려지고 있어요.',
    imageUrl: 'https://images.unsplash.com/photo-1631815541542-e896f4795f70?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '8', 
    category: '치과', 
    title: '서울뷰치과의원', 
    location: '대전',
    review: '보고서로 마케팅 성과가 한눈에 보여요. 무엇이 잘 되고 있는지 명확해요!',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '9', 
    category: '한의원', 
    title: '검단약손한의원', 
    location: '인천',
    review: '지역 내 검색 노출이 크게 좋아졌어요! 신규 환자도 계속 늘고 있어요.',
    imageUrl: 'https://images.unsplash.com/photo-1590611357124-73d828355f2d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '10', 
    category: '내과', 
    title: '속편한윤내과', 
    location: '대전',
    review: '체계적인 콘텐츠 운영으로 병원 신뢰도가 높아졌어요. 재방문율도 올랐네요.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '11', 
    category: '피부과', 
    title: '혜성플러스의원', 
    location: '동대문구',
    review: '맡긴 뒤 온라인 문의가 많이 늘었어요! 카카오톡 상담도 활발해졌네요.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '12', 
    category: '정신건강의학과', 
    title: '서울뜰정신건강의학과의원', 
    location: '서울',
    review: '플레이스와 블로그 운영으로 검색 노출이 좋아졌어요. 신뢰도도 함께 올랐네요.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '13', 
    category: '치과', 
    title: '산본엘치과', 
    location: '군포시',
    review: '디지털 브랜딩 후 플레이스 순위가 올라가고 신규 환자가 늘었어요!',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '14', 
    category: '치과', 
    title: '연세타이밍치과의원', 
    location: '강남구',
    review: '통합 마케팅으로 병원 가치가 높아졌어요. 예약도 꾸준히 들어오고 있어요.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '15', 
    category: '정형외과', 
    title: '광명척척정형외과의원', 
    location: '광명시',
    review: '지역 검색에서 잘 노출되게 되었어요. 콘텐츠 퀄리티 덕분에 신뢰도도 올랐어요.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' 
  },
];

export const CONTACT_INFO = {
  phone: '1670-0704',
  email: 'wiz@wiztheplanning.com',
  kakao: 'https://pf.kakao.com/_QUTxcb',
  companyName: '(주)위즈더플래닝',
  representative: '정현우',
  businessNumber: '668-81-00391',
  address: '서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호, 2519호',
  privacyOfficer: '김민우',
  privacyEmail: 'qpqpqp@wiztheplanning.com',
  operatingHours: '오전 10:00 ~ 오후 6:00'
};

export const PAIN_POINTS = [
  { title: '의료법이 두렵다', description: '선전·과대광고 금지 때문에 뭘 해도 되고 안 되는지 모르겠다.' },
  { title: '채널이 각자 논다', description: '블로그, 플레이스, 인스타가 따로 놀아 시너지가 전혀 안 난다.' },
  { title: '결과가 보이지 않는다', description: '광고비는 나가는데, 어디서 얼마나 왔는지 설명을 못 받는다.' },
  { title: '광고 끄면 끝이다', description: '광고로 잠깐 늘었지만, 병원 자체에 쌓인 게 없어 끄면 다시 줄어든다.' }
];
