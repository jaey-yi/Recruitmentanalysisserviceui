import { useParams, Link, useNavigate } from 'react-router';
import { Bookmark, ArrowRight, Building2 } from 'lucide-react';
import { useState } from 'react';
import { mockJobDetails } from '../data/mockData';

interface JobDetailPageProps {
  isLoggedIn: boolean;
}

export function JobDetailPage({ isLoggedIn }: JobDetailPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const job = mockJobDetails[id as keyof typeof mockJobDetails];

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>공고를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Section - 60% */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Link
                      to={`/company/${job.companyId}`}
                      className="text-primary hover:underline flex items-center gap-2 mb-2"
                    >
                      <Building2 size={18} />
                      {job.companyName}
                    </Link>
                    <p className="text-sm text-gray-500 mb-3">{job.industry}</p>
                    <h1 className="mb-3">{job.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{job.experienceRange}</span>
                      <span className="text-gray-300">|</span>
                      <span>
                        {job.deadline} 마감 <span className="text-primary">D-{job.dday}</span>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-3 rounded-lg border transition-colors ${
                      isBookmarked
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
                    }`}
                  >
                    <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-700">{job.content}</div>
              </div>
            </div>
          </div>

          {/* Right Section - 40% */}
          <div className="lg:col-span-2 space-y-6">
            {/* Analysis Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="mb-4 pb-3 border-b border-gray-200">공고 분석</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm mb-2">회사 한 줄 소개</h4>
                  <p className="text-sm text-gray-700">{job.analysis.companyIntro}</p>
                </div>

                <div>
                  <h4 className="text-sm mb-2">R&R</h4>
                  <p className="text-sm text-gray-700">{job.analysis.responsibilities}</p>
                </div>

                <div>
                  <h4 className="text-sm mb-2">필수 역량</h4>
                  <p className="text-sm text-gray-700">{job.analysis.requiredSkills}</p>
                </div>

                <div>
                  <h4 className="text-sm mb-2">차별 포인트</h4>
                  <p className="text-sm text-gray-700">{job.analysis.differentiators}</p>
                </div>

                <div>
                  <h4 className="text-sm mb-2">숨은 키워드</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.analysis.hiddenKeywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm mb-2">추천 활동</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {job.analysis.recommendedActions.map((action, idx) => (
                      <li key={idx}>• {action}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fit Analysis Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
              {!isLoggedIn && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-10">
                  <p className="mb-4 text-center">
                    로그인하고 나의 적합도를
                    <br />
                    확인하세요
                  </p>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
                    로그인
                  </button>
                </div>
              )}

              <h3 className="mb-4 pb-3 border-b border-gray-200">공고 적합도 분석</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm mb-2 text-green-600">강점 역량</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {job.fitAnalysis.strengths.map((strength, idx) => (
                      <li key={idx}>✓ {strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-red-600">약점 역량</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {job.fitAnalysis.weaknesses.map((weakness, idx) => (
                      <li key={idx}>△ {weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => navigate(`/strategy-input?industry=${job.industry}`)}
        className="fixed bottom-8 right-8 bg-primary text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl flex items-center gap-2"
      >
        산업 맞춤 포폴 전략 생성
        <ArrowRight size={20} />
      </button>
    </div>
  );
}