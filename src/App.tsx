import { HashRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Welcome } from './pages/Welcome';
import './index.css';

function InitRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Force redirect to /welcome on every fresh mount/reload,
    // regardless of the current URL (except when already on welcome).
    if (location.pathname !== '/welcome') {
      navigate('/welcome', { replace: true });
    }
  }, []); // Run ONLY once when the app is first mounted
  return null;
}

function AppContent() {
  return (
    <div className="app">
      <InitRedirect />
      {/* Headers have been moved directly into page components for tailored aesthetics */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
