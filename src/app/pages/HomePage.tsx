import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Plus, X } from 'lucide-react';
import { mockJobs } from '../data/mockData';

interface JobRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLoginRequired: () => void;
}

function JobRequestModal({
  isOpen,
  onClose,
  isLoggedIn,
  onLoginRequired,
}: JobRequestModalProps) {
  const [link, setLink] = useState('');
  const [platform, setPlatform] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      onClose();
      return;
    }
    alert('공고 등록 요청이 완료되었습니다!');
    setLink('');
    setPlatform('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6">공고 등록 요청</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">공고 링크</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">플랫폼명</label>
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="예: 원티드, 잡코리아"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'deadline'>('latest');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = !selectedFilter || job.jobType === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'latest') {
      return b.id.localeCompare(a.id);
    }
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
  });

  const totalPages = Math.ceil(sortedJobs.length / itemsPerPage);
  const displayedJobs = sortedJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-16">
        {/* Search Section */}
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-center mb-8">
              나에게 맞는 채용 공고를 찾아보세요
            </h1>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="공고 제목으로 검색하세요"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-[1400px] mx-auto px-8 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">직무 필터링:</span>
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === null
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSelectedFilter('frontend')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === 'frontend'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              프론트엔드
            </button>
            <button
              onClick={() => setSelectedFilter('backend')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === 'backend'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              백엔드
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === 'ai'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              AI
            </button>
            <button
              onClick={() => setSelectedFilter('data')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === 'data'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              데이터 분석
            </button>
            <button
              onClick={() => setSelectedFilter('game')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === 'game'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
              }`}
            >
              게임
            </button>
          </div>
        </div>

        {/* Sort Section */}
        <div className="max-w-[1400px] mx-auto px-8 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">총 {filteredJobs.length}개의 공고</p>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'latest' | 'deadline')
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="latest">최신 등록 순</option>
              <option value="deadline">마감일 순</option>
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <Link
                key={job.id}
                to={`/job/${job.id}`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-primary transition-all"
              >
                <div className="mb-3">
                  <p className="text-sm text-gray-500 mb-1">
                    {job.companyName}
                  </p>
                  <h3 className="mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {job.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {job.deadline} 마감
                  </span>
                  <span className="text-sm px-3 py-1 bg-blue-50 text-primary rounded-full">
                    {job.experience}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setShowRequestModal(true)}
        className="fixed bottom-8 right-8 bg-primary text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl flex items-center gap-2"
      >
        <Plus size={20} />
        공고 등록 요청
      </button>

      <JobRequestModal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        isLoggedIn={false}
        onLoginRequired={() => {}}
      />
    </div>
  );
}
