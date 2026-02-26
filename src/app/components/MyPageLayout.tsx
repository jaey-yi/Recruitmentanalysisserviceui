import { Link, useLocation } from 'react-router';
import { User, Bookmark, FileText, Briefcase, ClipboardList, MessageSquare } from 'lucide-react';

interface MyPageLayoutProps {
  children: React.ReactNode;
}

export function MyPageLayout({ children }: MyPageLayoutProps) {
  const location = useLocation();

  const menuItems = [
    { path: '/mypage/profile', label: '프로필 관리', icon: User },
    { path: '/mypage/bookmarks', label: '북마크 관리', icon: Bookmark },
    { path: '/mypage/files', label: '내 파일 관리', icon: FileText },
    { path: '/mypage/experiences', label: '내 경험 관리', icon: Briefcase },
    { path: '/mypage/strategies', label: '포폴 전략 관리', icon: ClipboardList },
    { path: '/mypage/interviews', label: '면접 결과 관리', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="mb-4 pb-4 border-b border-gray-200">마이페이지</h3>
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
