import { MyPageLayout } from '../../components/MyPageLayout';
import { Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { mockInterviews } from '../../data/mockData';

export function InterviewsPage() {
  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="mb-6 pb-4 border-b border-gray-200">면접 결과 관리</h2>

        <div className="space-y-4">
          {mockInterviews.map((interview) => (
            <div
              key={interview.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="mb-2">{interview.portfolioTitle}</h4>
                  <p className="text-sm text-gray-500">{interview.interviewDate} 진행</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/interview-result/${interview.id}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Eye size={18} />
                    보기
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mockInterviews.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            진행한 면접이 없습니다.
          </div>
        )}
      </div>
    </MyPageLayout>
  );
}
