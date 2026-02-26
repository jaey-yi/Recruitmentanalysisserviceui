import { useNavigate } from 'react-router';
import { AlertCircle, Play, FileText } from 'lucide-react';
import { mockInterviews, mockStrategies } from '../data/mockData';

export function InterviewCreatePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Navigation */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Interview History */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="mb-4 pb-4 border-b border-gray-200">
                면접 히스토리
              </h3>
              <div className="space-y-2">
                <button
                  className="w-full p-4 border rounded-lg"
                  onClick={() => navigate(`/interview-create`)}
                >
                  새 모의 면접 생성
                </button>
                {mockInterviews.map((interview) => (
                  <button
                    key={interview.id}
                    onClick={() =>
                      navigate(`/interview-result/${interview.id}`)
                    }
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm mb-1">{interview.portfolioTitle}</p>
                    <p className="text-xs text-gray-500">
                      {interview.interviewDate}
                    </p>
                  </button>
                ))}
                <button
                  className="w-full p-4 border rounded-lg"
                  onClick={() => navigate(`/mypage/interviews`)}
                >
                  관리 하기
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="mb-6 pb-4 border-b border-gray-200">
                AI 모의 면접
              </h2>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="mb-2">진행 방법</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• 포트폴리오를 선택하면 맞춤형 질문이 생성됩니다</li>
                      <li>• 각 질문당 1분의 답변 시간이 주어집니다</li>
                      <li>• 총 5개의 질문으로 구성됩니다</li>
                      <li>• 면접 종료 후 상세한 피드백을 받을 수 있습니다</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Portfolio Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3>포트폴리오 선택</h3>
                  <button
                    onClick={() => navigate('/mypage/files')}
                    className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
                  >
                    <FileText size={16} />
                    포트폴리오 등록하러 가기
                  </button>
                </div>
                <div className="space-y-3">
                  {mockStrategies.map((strategy) => (
                    <label
                      key={strategy.id}
                      className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    >
                      <input
                        type="radio"
                        name="portfolio"
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm">
                            {strategy.jobType} 포트폴리오
                          </h4>
                          <span className="px-2 py-1 bg-blue-50 text-primary rounded text-xs">
                            {strategy.industry}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          {strategy.createdAt} 생성
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Start Button */}
              <button
                onClick={() => navigate('/interview-progress')}
                className="w-full py-4 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Play size={20} />
                면접 시작
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
