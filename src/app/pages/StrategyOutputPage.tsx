import { useParams, useNavigate } from 'react-router';
import { Trash2, MessageSquare, Plus, Settings } from 'lucide-react';
import { mockStrategies } from '../data/mockData';

export function StrategyOutputPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const strategy = mockStrategies.find((s) => s.id === id);

  if (!strategy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>전략을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Strategy History */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="mb-4 pb-4 border-b border-gray-200">전략 히스토리</h3>
              <div className="space-y-2 mb-6">
                {mockStrategies.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigate(`/strategy-output/${s.id}`)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      s.id === id ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <p className="text-sm mb-1">{s.jobType}</p>
                    <p className="text-xs opacity-70">{s.createdAt}</p>
                  </button>
                ))}
              </div>
              <button
                onClick={() => navigate('/mypage/strategies')}
                className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border-t border-gray-200 pt-4 mt-4"
              >
                <Settings size={18} />
                관리하기
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className="mb-2">{strategy.jobType} 포트폴리오 전략</h2>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">
                      {strategy.industry}
                    </span>
                    <span className="text-sm text-gray-500">{strategy.createdAt} 생성</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => navigate('/strategy-input')}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Plus size={18} />
                    새전략 등록하기
                  </button>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2">
                    <Trash2 size={18} />
                    삭제
                  </button>
                </div>
              </div>

              {/* Strategy Content */}
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-700">{strategy.content}</div>
              </div>

              {/* Structured Sections */}
              <div className="mt-8 space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="mb-3">핵심 강점</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• React 및 TypeScript 전문성</li>
                    <li>• 성능 최적화 경험</li>
                    <li>• 실무 프로젝트 경험 다수</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="mb-3">보완 필요 영역</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 금융 도메인 지식 부족</li>
                    <li>• 대규모 서비스 경험 부족</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="mb-3">즉시 실행 가능한 액션</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ 간편 송금 서비스 MVP 개발</li>
                    <li>✓ 금융 API 연동 프로젝트</li>
                    <li>✓ 성능 최적화 사례 블로그 작성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button - Interview */}
      <button
        onClick={() => navigate('/interview-create')}
        className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:shadow-xl flex items-center gap-2"
      >
        <MessageSquare size={20} />
        AI 모의 면접 시작
      </button>
    </div>
  );
}