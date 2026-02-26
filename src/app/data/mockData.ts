export const mockJobs = [
  {
    id: '1',
    companyId: '1',
    companyName: '토스',
    title: '프론트엔드 개발자',
    summary: '사용자 경험을 혁신할 프론트엔드 개발자를 모집합니다.',
    deadline: '2026.03.31',
    experience: '3년 이상',
    jobType: 'frontend',
    category: '프론트엔드',
    industry: '핀테크',
  },
  {
    id: '2',
    companyId: '2',
    companyName: '네이버',
    title: '백엔드 엔지니어',
    summary: '대규모 트래픽을 처리하는 백엔드 시스템 개발자를 찾습니다.',
    deadline: '2026.03.25',
    experience: '신입',
    jobType: 'backend',
    category: '백엔드',
    industry: 'IT 서비스',
  },
  {
    id: '3',
    companyId: '3',
    companyName: '카카오',
    title: '프론트엔드 개발자 (React)',
    summary: 'React 기반의 웹 서비스를 개발할 개발자를 모집합니다.',
    deadline: '2026.04.10',
    experience: '2년 이상',
    jobType: 'frontend',
    category: '프론트엔드',
    industry: 'IT 서비스',
  },
  {
    id: '4',
    companyId: '4',
    companyName: '쿠팡',
    title: '백엔드 개발자',
    summary: 'MSA 기반 백엔드 시스템 설계 및 개발 담당',
    deadline: '2026.03.28',
    experience: '5년 이상',
    jobType: 'backend',
    category: '백엔드',
    industry: '이커머스',
  },
  {
    id: '5',
    companyId: '5',
    companyName: '당근마켓',
    title: 'Frontend Developer',
    summary: '지역 기반 서비스의 프론트엔드를 개발합니다.',
    deadline: '2026.04.05',
    experience: '신입/경력',
    jobType: 'frontend',
    category: '프론트엔드',
    industry: '플랫폼',
  },
  {
    id: '6',
    companyId: '1',
    companyName: '토스',
    title: 'Backend Engineer',
    summary: '금융 플랫폼의 백엔드 시스템을 개발합니다.',
    deadline: '2026.04.15',
    experience: '3년 이상',
    jobType: 'backend',
    category: '백엔드',
    industry: '핀테크',
  },
];

export const mockJobDetails = {
  '1': {
    id: '1',
    companyId: '1',
    companyName: '토스',
    title: '프론트엔드 개발자',
    industry: '핀테크',
    experienceRange: '3~5년',
    deadline: '2026.03.31',
    dday: 33,
    content: `# 프론트엔드 개발자 채용

## 주요 업무
- React 기반 웹 애플리케이션 개발
- 사용자 경험 개선을 위한 UI/UX 구현
- 성능 최적화 및 코드 품질 관리
- 디자인 시스템 구축 및 유지보수

## 자격요건
- React, TypeScript 능숙자
- 3년 이상의 프론트엔드 개발 경험
- 반응형 웹 개발 경험
- Git을 이용한 협업 경험

## 우대사항
- Next.js 경험자
- 금융 도메인 경험자
- 디자인 시스템 구축 경험
- 오픈소스 기여 경험`,
    analysis: {
      companyIntro: '간편 송금부터 투자까지, 금융의 모든 것을 혁신하는 핀테크 선도기업',
      responsibilities: 'React 기반 웹 애플리케이션 개발, UI/UX 구현, 성능 최적화, 디자인 시스템 구축',
      requiredSkills: 'React, TypeScript, 반응형 웹 개발, Git 협업',
      differentiators: '금융 도메인 이해도, Next.js 활용 능력, 디자인 시스템 경험',
      hiddenKeywords: ['사용자 경험', '성능 최적화', '코드 품질', '협업'],
      recommendedActions: [
        '금융 서비스 사이드 프로젝트 진행',
        'TypeScript로 디자인 시스템 구축 경험 만들기',
        '성능 최적화 사례 연구 및 블로그 작성',
      ],
    },
    fitAnalysis: {
      strengths: [
        'React 및 TypeScript 전문성',
        '반응형 웹 개발 경험',
        'Git 협업 능력',
      ],
      weaknesses: [
        '금융 도메인 경험 부족',
        'Next.js 프로젝트 경험 부족',
      ],
    },
  },
};

export const mockCompanies = {
  '1': {
    id: '1',
    name: '토스',
    logo: '🏢',
    industry: '핀테크',
    companyType: '주식회사',
    employeeCount: '1,000명',
    address: '서울특별시 강남구',
    revenue: '5,000억원',
    foundedYear: '2013년',
    website: 'https://toss.im',
    industryAnalysis: {
      registeredDate: '2026.02.15',
      updatedDate: '2026.02.20',
      keywords: ['디지털 금융', '간편 송금', '자산관리', 'AI 금융'],
      trendSummary: '디지털 금융 전환 가속화, AI 기반 맞춤형 금융 서비스 확대, 마이데이터 산업 성장',
      marketSize: '국내 핀테크 시장 규모 약 10조원 (연 20% 성장)',
      regulatoryRisk: '금융위원회 규제 강화, 개인정보보호법 준수 필수',
      competitiveLandscape: '카카오뱅크, 네이버페이 등 빅테크 기업과의 경쟁 심화',
      hiringTrend: 'AI/ML 엔지니어, 데이터 분석가, 보안 전문가 수요 증가',
      investmentDirection: 'AI 기반 신용평가, 마이데이터 플랫폼, 해외 진출 확대',
    },
  },
};

export const mockExperiences = [
  {
    id: '1',
    title: 'E-커머스 플랫폼 개발',
    period: '2024.01 - 2024.12',
    content: 'React와 TypeScript를 활용한 쇼핑몰 프론트엔드 개발. 성능 최적화로 로딩 시간 40% 단축.',
  },
  {
    id: '2',
    title: '디자인 시스템 구축',
    period: '2023.06 - 2023.12',
    content: 'Storybook 기반 컴포넌트 라이브러리 구축. 개발 생산성 30% 향상.',
  },
];

export const mockStrategies = [
  {
    id: '1',
    jobType: '프론트엔드',
    createdAt: '2026.02.20',
    industry: '핀테크',
    content: `# 핀테크 산업 맞춤 포트폴리오 전략

## 1. 핵심 경험 재구성
### E-커머스 플랫폼 개발
- **금융 관점 강조**: 결제 시스템 구현 경험 부각
- **보안 측면**: 민감 정보 처리 및 암호화 경험 추가
- **성능 최적화**: 대규모 트래픽 처리 사례 상세화

## 2. 추가 권장 프로젝트
- 간편 송금 서비스 MVP 개발
- 투자 대시보드 UI 구현
- 금융 데이터 시각화 프로젝트

## 3. 기술 스택 보완
- Next.js를 활용한 SSR 경험
- 금융 API 연동 경험
- 차트 라이브러리 활용 능력`,
  },
];

export const mockInterviews = [
  {
    id: '1',
    portfolioTitle: '핀테크 특화 포트폴리오',
    interviewDate: '2026.02.18',
  },
];

export const mockInterviewQuestions = [
  {
    id: '1',
    difficulty: '중',
    questionNumber: 1,
    question: 'React의 상태 관리 방법에 대해 설명하고, 프로젝트에서 어떤 방식을 선택했는지 이유와 함께 설명해주세요.',
  },
  {
    id: '2',
    difficulty: '상',
    questionNumber: 2,
    question: '대규모 트래픽 상황에서 프론트엔드 성능을 최적화한 경험이 있다면 구체적으로 설명해주세요.',
  },
];

export const mockInterviewResult = {
  '1': {
    question: 'React의 상태 관리 방법에 대해 설명하고, 프로젝트에서 어떤 방식을 선택했는지 이유와 함께 설명해주세요.',
    answer: 'React에서는 useState, useReducer 등의 Hook과 Context API, 그리고 Redux, Zustand 같은 외부 라이브러리를 활용할 수 있습니다. 저는 프로젝트 규모에 따라 선택했는데, 중소규모에서는 Context API를, 대규모에서는 Zustand를 사용했습니다.',
    evaluation: {
      intent: '상태 관리에 대한 이해도와 실무 적용 능력 확인',
      overallEvaluation: '기본 개념은 잘 이해하고 있으나, 각 방식의 장단점과 선택 기준을 더 구체적으로 설명하면 좋겠습니다. 실제 프로젝트 사례를 더 상세히 추가하는 것을 권장합니다.',
    },
  },
};

export const mockBookmarks = [
  { id: '1', jobId: '1', companyName: '토스', title: '프론트엔드 개발자', deadline: '2026.03.31' },
  { id: '2', jobId: '3', companyName: '카카오', title: '프론트엔드 개발자 (React)', deadline: '2026.04.10' },
];

export const mockFiles = [
  { id: '1', type: '이력서', title: '2026_개발자_이력서.pdf', size: '2.3MB', uploadedAt: '2026.02.10' },
  { id: '2', type: '포트폴리오', title: 'Portfolio_2026.pdf', size: '5.1MB', uploadedAt: '2026.02.15' },
];