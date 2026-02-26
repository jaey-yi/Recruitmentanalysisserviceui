import { MyPageLayout } from '../../components/MyPageLayout';
import { Trash2, Sparkles, Save } from 'lucide-react';
import { mockExperiences } from '../../data/mockData';

export function ExperiencesPage() {
  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h2>내 경험 관리</h2>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              <Sparkles size={18} />
              AI 경험 추출
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Save size={18} />
              저장
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {mockExperiences.map((experience) => (
            <div key={experience.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    defaultValue={experience.title}
                    className="w-full text-lg mb-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    defaultValue={experience.period}
                    className="w-64 text-sm text-gray-600 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
              <textarea
                defaultValue={experience.content}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          ))}

          <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors">
            + 경험 추가하기
          </button>
        </div>
      </div>
    </MyPageLayout>
  );
}
