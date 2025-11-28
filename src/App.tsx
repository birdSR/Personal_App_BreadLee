import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isLoggedIn } from './utils/localStorage';
import LoginPage from './components/LoginPage';
import SignupFlow from './components/SignupFlow';
import OnboardingPage from './components/OnboardingPage';
import MainLayout from './components/MainLayout';
import HomePage from './components/HomePage';
import RecipesPage from './components/RecipesPage';
import BreadMapPage from './components/BreadMapPage';
import MyPage from './components/MyPage';
import AIChatPage from './components/AIChatPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return isLoggedIn() ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className="w-[402px] h-[874px] mx-auto bg-white overflow-hidden relative">
      <BrowserRouter>
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/:step" element={<SignupFlow />} />
          <Route path="/onboarding" element={<OnboardingPage />} />

          {/* Protected Routes with Layout */}
          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/bread-map" element={<BreadMapPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/ai-chat" element={<AIChatPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
