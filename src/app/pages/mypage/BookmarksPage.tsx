import { MyPageLayout } from '../../components/MyPageLayout';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { mockBookmarks } from '../../data/mockData';

export function BookmarksPage() {
  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="mb-6 pb-4 border-b border-gray-200">북마크 관리</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{bookmark.companyName}</p>
                  <Link to={`/job/${bookmark.jobId}`} className="hover:text-primary">
                    <h4>{bookmark.title}</h4>
                  </Link>
                </div>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-500">{bookmark.deadline} 마감</p>
            </div>
          ))}
        </div>

        {mockBookmarks.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            북마크한 공고가 없습니다.
          </div>
        )}
      </div>
    </MyPageLayout>
  );
}
