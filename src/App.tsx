import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Welcome } from './pages/Welcome';
import PillNav from './components/ui/PillNav';
import StaggeredMenu from './components/ui/StaggeredMenu';
import logo from './assets/logo.svg';
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
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const location = useLocation();
  const isWelcomePage = location.pathname === '/welcome';

  return (
    <div className="app">
      <InitRedirect />
      {!isWelcomePage && (
        <>
          <div className="desktop-only">
            <PillNav
              logo={logo}
              logoAlt="Company Logo"
              items={[
                { label: 'Home', href: '/home' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' }
              ]}
              activeHref={location.pathname}
              ease="power2.easeOut"
              baseColor="#000000"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#000000"
              initialLoadAnimation={false}
            />
          </div>

          <div className="mobile-only" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000, pointerEvents: 'none' }}>
            <StaggeredMenu
              position="right"
              items={menuItems.map(item => ({...item, link: item.link === '/' ? '/home' : item.link}))}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#111"
              changeMenuColorOnOpen={true}
              colors={['#B19EEF', '#5227FF']}
              logoUrl={logo}
              accentColor="#5227FF"
              isFixed={true}
            />
          </div>
        </>
      )}
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
