import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Eye, Plus, X, Settings } from 'lucide-react';
import { mockExperiences, mockStrategies } from '../data/mockData';

function ExperienceModal({ isOpen, onClose, experience }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6">경험 상세</h2>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2">{experience?.title}</h4>
            <p className="text-sm text-gray-500">{experience?.period}</p>
          </div>
          <div>
            <p className="text-gray-700 whitespace-pre-wrap">
              {experience?.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StrategyInputPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const industryParam = searchParams.get('industry');

  const [jobType, setJobType] = useState('frontend');
  const [industryEnabled, setIndustryEnabled] = useState(!!industryParam);
  const [industry, setIndustry] = useState(industryParam || '');
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const handleGenerate = () => {
    // Navigate to output page with new strategy
    navigate('/strategy-output/1');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 ">
      <div className="max-w-[1400px] mx-auto px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* Left Sidebar - Strategy History */}
          <div className="lg:col-span-1 ">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="mb-4 pb-4 border-b border-gray-200">
                전략 히스토리
              </h3>
              <div className="space-y-2">
                <button
                  className="w-full p-4 border rounded-lg"
                  onClick={() => navigate(`/strategy-input`)}
                >
                  새 전략 생성
                </button>
                {mockStrategies.map((strategy) => (
                  <button
                    key={strategy.id}
                    onClick={() => navigate(`/strategy-output/${strategy.id}`)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm mb-1">{strategy.jobType}</p>
                    <p className="text-xs text-gray-500">
                      {strategy.createdAt}
                    </p>
                  </button>
                ))}
                <button
                  onClick={() => navigate('/mypage/strategies')}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border-t border-gray-200 pt-4 mt-4"
                >
                  <Settings size={18} />
                  관리하기
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Content - Experiences */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <h3>경험 선택</h3>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
                      <Plus size={16} />
                      경험 등록
                    </button>
                  </div>

                  <div className="space-y-3">
                    {mockExperiences.map((exp) => (
                      <div
                        key={exp.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={selectedExperiences.includes(exp.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedExperiences([
                                  ...selectedExperiences,
                                  exp.id,
                                ]);
                              } else {
                                setSelectedExperiences(
                                  selectedExperiences.filter(
                                    (id) => id !== exp.id,
                                  ),
                                );
                              }
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm mb-1">{exp.title}</h4>
                            <p className="text-xs text-gray-500 mb-2">
                              {exp.period}
                            </p>
                            <button
                              onClick={() => {
                                setSelectedExperience(exp);
                                setShowModal(true);
                              }}
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              <Eye size={14} />
                              상세보기
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content - Settings */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="mb-6 pb-4 border-b border-gray-200">
                    포폴 전략 설정
                  </h3>

                  <div className="space-y-6">
                    {/* Job Type */}
                    <div>
                      <label className="block mb-3">직무 선택</label>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setJobType('frontend')}
                          className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                            jobType === 'frontend'
                              ? 'border-primary bg-blue-50 text-primary'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          프론트엔드
                        </button>
                        <button
                          onClick={() => setJobType('backend')}
                          className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                            jobType === 'backend'
                              ? 'border-primary bg-blue-50 text-primary'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          백엔드
                        </button>
                      </div>
                    </div>

                    {/* Industry Toggle */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label>산업 특화</label>
                        <button
                          onClick={() => setIndustryEnabled(!industryEnabled)}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            industryEnabled ? 'bg-primary' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              industryEnabled ? 'translate-x-6' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {industryEnabled && (
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">산업 선택</option>
                          <option value="핀테크">핀테크</option>
                          <option value="IT 서비스">IT 서비스</option>
                          <option value="이커머스">이커머스</option>
                          <option value="플랫폼">플랫폼</option>
                        </select>
                      )}
                    </div>

                    {/* Generate Button */}
                    <button
                      onClick={handleGenerate}
                      disabled={selectedExperiences.length === 0}
                      className="w-full py-4 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      전략 생성
                    </button>

                    {selectedExperiences.length === 0 && (
                      <p className="text-sm text-red-600 text-center">
                        최소 1개 이상의 경험을 선택해주세요
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        experience={selectedExperience}
      />
    </div>
  );
}
