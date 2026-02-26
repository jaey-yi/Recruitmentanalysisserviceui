import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import { Header } from './components/Header';
import { LoginModal } from './components/LoginModal';
import { HomePage } from './pages/HomePage';
import { JobDetailPage } from './pages/JobDetailPage';
import { CompanyDetailPage } from './pages/CompanyDetailPage';
import { ProfilePage } from './pages/mypage/ProfilePage';
import { BookmarksPage } from './pages/mypage/BookmarksPage';
import { FilesPage } from './pages/mypage/FilesPage';
import { ExperiencesPage } from './pages/mypage/ExperiencesPage';
import { StrategiesPage } from './pages/mypage/StrategiesPage';
import { InterviewsPage } from './pages/mypage/InterviewsPage';
import { StrategyInputPage } from './pages/StrategyInputPage';
import { StrategyOutputPage } from './pages/StrategyOutputPage';
import { InterviewCreatePage } from './pages/InterviewCreatePage';
import { InterviewProgressPage } from './pages/InterviewProgressPage';
import { InterviewResultPage } from './pages/InterviewResultPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={() => setShowLoginModal(true)}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<JobDetailPage isLoggedIn={isLoggedIn} />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
          <Route path="/mypage/profile" element={<ProfilePage />} />
          <Route path="/mypage/bookmarks" element={<BookmarksPage />} />
          <Route path="/mypage/files" element={<FilesPage />} />
          <Route path="/mypage/experiences" element={<ExperiencesPage />} />
          <Route path="/mypage/strategies" element={<StrategiesPage />} />
          <Route path="/mypage/interviews" element={<InterviewsPage />} />
          <Route path="/strategy-input" element={<StrategyInputPage />} />
          <Route path="/strategy-output/:id" element={<StrategyOutputPage />} />
          <Route path="/interview-create" element={<InterviewCreatePage />} />
          <Route path="/interview-progress" element={<InterviewProgressPage />} />
          <Route path="/interview-result/:id" element={<InterviewResultPage />} />
        </Routes>

        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      </div>
    </BrowserRouter>
  );
}