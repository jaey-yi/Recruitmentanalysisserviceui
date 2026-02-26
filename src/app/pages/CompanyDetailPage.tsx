import { useParams } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { mockCompanies } from '../data/mockData';

export function CompanyDetailPage() {
  const { id } = useParams();
  const company = mockCompanies[id as keyof typeof mockCompanies];

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>기업 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const { industryAnalysis } = company;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1000px] mx-auto px-8 space-y-6">
        {/* Company Info Card */}
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
              {company.logo}
            </div>
            <div className="flex-1">
              <h1 className="mb-2">{company.name}</h1>
              <p className="text-gray-600">{company.industry}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <span className="text-gray-500">기업 형태</span>
              <p className="text-gray-900 mt-1">{company.companyType}</p>
            </div>
            <div>
              <span className="text-gray-500">사원 수</span>
              <p className="text-gray-900 mt-1">{company.employeeCount}</p>
            </div>
            <div>
              <span className="text-gray-500">주소지</span>
              <p className="text-gray-900 mt-1">{company.address}</p>
            </div>
            <div>
              <span className="text-gray-500">매출액</span>
              <p className="text-gray-900 mt-1">{company.revenue}</p>
            </div>
            <div>
              <span className="text-gray-500">설립연도</span>
              <p className="text-gray-900 mt-1">{company.foundedYear}</p>
            </div>
            <div>
              <span className="text-gray-500">홈페이지</span>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1 mt-1"
              >
                {company.website}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Industry Analysis Card */}
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="mb-6">
            <h2 className="mb-2">산업 분석</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>분석 등록일: {industryAnalysis.registeredDate}</span>
              <span className="text-gray-300">|</span>
              <span>업데이트: {industryAnalysis.updatedDate}</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Keywords */}
            <div>
              <h4 className="mb-3">핵심 산업 키워드</h4>
              <div className="flex flex-wrap gap-2">
                {industryAnalysis.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Trend Summary */}
            <div>
              <h4 className="mb-3">산업 트렌드</h4>
              <p className="text-gray-700">{industryAnalysis.trendSummary}</p>
            </div>

            {/* Market Size */}
            <div>
              <h4 className="mb-3">산업 규모</h4>
              <p className="text-gray-700">{industryAnalysis.marketSize}</p>
            </div>

            {/* Regulatory Risk */}
            <div>
              <h4 className="mb-3">규제 리스크</h4>
              <p className="text-gray-700">{industryAnalysis.regulatoryRisk}</p>
            </div>

            {/* Competitive Landscape */}
            <div>
              <h4 className="mb-3">경쟁 구도</h4>
              <p className="text-gray-700">{industryAnalysis.competitiveLandscape}</p>
            </div>

            {/* Hiring Trend */}
            <div>
              <h4 className="mb-3">채용 트렌드</h4>
              <p className="text-gray-700">{industryAnalysis.hiringTrend}</p>
            </div>

            {/* Investment Direction */}
            <div>
              <h4 className="mb-3">투자 방향</h4>
              <p className="text-gray-700">{industryAnalysis.investmentDirection}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
