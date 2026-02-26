import { MyPageLayout } from '../../components/MyPageLayout';
import { Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { mockStrategies } from '../../data/mockData';

export function StrategiesPage() {
  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="mb-6 pb-4 border-b border-gray-200">포폴 전략 관리</h2>

        <div className="space-y-4">
          {mockStrategies.map((strategy) => (
            <div
              key={strategy.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4>{strategy.jobType}</h4>
                    <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm">
                      {strategy.industry}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{strategy.createdAt} 생성</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/strategy-output/${strategy.id}`}
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

        {mockStrategies.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            생성된 포폴 전략이 없습니다.
          </div>
        )}
      </div>
    </MyPageLayout>
  );
}
