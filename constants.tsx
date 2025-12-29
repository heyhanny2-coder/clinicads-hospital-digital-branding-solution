
import React from 'react';
import { Shield, Search, TrendingUp, Users, Instagram, Layout, MessageSquare, PenTool } from 'lucide-react';
import { ServiceItem, PortfolioItem, ProcessStep } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'content',
    title: '검색 & 콘텐츠',
    description: '생활정보형 블로그 + 브랜드 블로그 운영',
    icon: 'PenTool',
    details: ['진료과·지역 기반 키워드 설계', 'SEO 구조 설계', '브랜드 가치 중심 원고 기획']
  },
  {
    id: 'place',
    title: '네이버 플레이스',
    description: '병원의 얼굴, 플레이스 100% 최적화',
    icon: 'Layout',
    details: ['대표사진·소식·쿠폰 세팅', '순위 구조 개선 전략', '편의 기능(예약/톡톡) 활성화']
  },
  {
    id: 'review',
    title: '리뷰 관리',
    description: '환자의 신뢰를 결정하는 마지막 한 조각',
    icon: 'MessageSquare',
    details: ['방문자 리뷰 모니터링', '악성·오해성 리뷰 대응 가이드', '신뢰도 높은 리뷰 시스템 구축']
  },
  {
    id: 'sns',
    title: 'SNS 마케팅',
    description: '팬덤을 만드는 병원 인스타그램',
    icon: 'Instagram',
    details: ['주 2회 프리미엄 콘텐츠', '신뢰 중심 브랜딩 기획', '환자와의 소통 채널 운영']
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
  { title: '의료법 리스크', description: '법적 규제 때문에 무엇이 가능하고 불가능한지 혼란스럽습니다.' },
  { title: '파편화된 마케팅', description: '블로그, 플레이스, 리뷰가 제각각이라 시너지가 나지 않습니다.' },
  { title: '불투명한 결과', description: '광고비는 나가는데 정확한 유입 경로와 성과 설명이 없습니다.' },
  { title: '브랜드 부재', description: '광고는 반짝 했지만, 병원 자체의 가치는 쌓이지 않았습니다.' }
];
