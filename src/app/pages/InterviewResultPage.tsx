import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import {
  mockInterviewQuestions,
  mockInterviewResult,
  mockInterviews,
} from '../data/mockData';

export function InterviewResultPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedQuestionId, setSelectedQuestionId] = useState('1');

  const result =
    mockInterviewResult[selectedQuestionId as keyof typeof mockInterviewResult];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Navigation */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Question List */}
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
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="mb-4 pb-4 border-b border-gray-200">질문 목록</h3>
              <div className="space-y-2">
                {mockInterviewQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedQuestionId === q.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">질문 {q.questionNumber}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs ${
                          selectedQuestionId === q.id
                            ? 'bg-white/20'
                            : q.difficulty === '상'
                              ? 'bg-red-50 text-red-600'
                              : q.difficulty === '중'
                                ? 'bg-amber-50 text-amber-600'
                                : 'bg-green-50 text-green-600'
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </div>
                    <p className="text-xs opacity-70 line-clamp-2">
                      {q.question}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Result Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Question */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="mb-4 pb-4 border-b border-gray-200">질문</h3>
              <p className="text-gray-700">{result?.question}</p>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="mb-4 pb-4 border-b border-gray-200">답변</h3>
              <p className="text-gray-700 whitespace-pre-wrap">
                {result?.answer}
              </p>
            </div>

            {/* Evaluation */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="mb-6 pb-4 border-b border-gray-200">평가</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3">질문 의도</h4>
                  <p className="text-gray-700">{result?.evaluation.intent}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="mb-3">종합 평가</h4>
                  <p className="text-gray-700">
                    {result?.evaluation.overallEvaluation}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="text-sm mb-2 text-green-700">잘한 점</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 기본 개념 이해도가 높음</li>
                      <li>• 실무 경험 기반 답변</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="text-sm mb-2 text-amber-700">개선할 점</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 구체적 사례 추가 필요</li>
                      <li>• 장단점 비교 보완 필요</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
