import { Link } from 'react-router';
import {
  User,
  LogOut,
  Bookmark,
  FileText,
  Briefcase,
  ClipboardList,
} from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
}

export function Header({ isLoggedIn, onLoginClick, onLogout }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl text-primary">
            📄 공고문
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              채용 공고
            </Link>
            <Link
              to="/strategy-input"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              포폴 전략
            </Link>
            <Link
              to="/interview-create"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              모의 면접
            </Link>
          </nav>
        </div>

        {/* Right: Auth */}
        <div className="relative">
          {!isLoggedIn ? (
            <button
              onClick={onLoginClick}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              로그인
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <User size={20} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-12 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <Link
                    to="/mypage/profile"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <User size={18} />
                    <span>프로필 관리</span>
                  </Link>
                  <Link
                    to="/mypage/bookmarks"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <Bookmark size={18} />
                    <span>북마크 관리</span>
                  </Link>
                  <Link
                    to="/mypage/files"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <FileText size={18} />
                    <span>내 파일 관리</span>
                  </Link>
                  <Link
                    to="/mypage/experiences"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <Briefcase size={18} />
                    <span>내 경험 관리</span>
                  </Link>
                  <Link
                    to="/mypage/strategies"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <ClipboardList size={18} />
                    <span>포폴 전략 관리</span>
                  </Link>
                  <Link
                    to="/mypage/interviews"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <ClipboardList size={18} />
                    <span>면접 결과 관리</span>
                  </Link>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      onLogout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-200"
                  >
                    <LogOut size={18} />
                    <span>로그아웃</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
