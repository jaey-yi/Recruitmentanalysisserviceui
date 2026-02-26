import { MyPageLayout } from '../../components/MyPageLayout';
import { LogOut, UserX } from 'lucide-react';

export function ProfilePage() {
  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="mb-6 pb-4 border-b border-gray-200">프로필 관리</h2>

        <div className="space-y-6 max-w-2xl">
          <div>
            <label className="block mb-2">이름</label>
            <input
              type="text"
              defaultValue="홍길동"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2">이메일</label>
            <input
              type="email"
              defaultValue="hong@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2">직무</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>프론트엔드</option>
              <option>백엔드</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">경력</label>
            <input
              type="text"
              defaultValue="3년"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
            저장
          </button>

          <div className="pt-6 mt-6 border-t border-gray-200 space-y-3">
            <button className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <LogOut size={18} />
              로그아웃
            </button>
            <button className="w-full py-3 px-4 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <UserX size={18} />
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
}
